package de.cdietze.ld37.core;

import com.google.common.base.Optional;
import de.cdietze.playn_util.ScaledElement;
import de.cdietze.playn_util.Screen;
import playn.scene.GroupLayer;
import playn.scene.ImageLayer;
import playn.scene.Layer;
import playn.scene.Pointer;
import pythagoras.f.Dimension;
import react.RList;
import react.Slot;
import react.Value;
import react.ValueView;
import tripleplay.ui.Background;
import tripleplay.ui.Root;
import tripleplay.ui.Style;
import tripleplay.ui.layout.BorderLayout;
import tripleplay.util.Colors;
import tripleplay.util.Layers;
import tripleplay.util.Logger;

import java.util.HashMap;
import java.util.Map;

import static de.cdietze.ld37.core.PointUtils.toX;
import static de.cdietze.ld37.core.PointUtils.toY;

public class BoardScreen extends Screen {
  public static final Logger log = new Logger("screen");

  private static final float fieldGapWidth = 0.03f;
  private static final Dimension maxSize = new Dimension(1200, 800);
  public final MainGame game;

  /**
   * Has the dimension of the board, i.e. state.dim
   */
  public final GroupLayer boardLayer;
  private final BoardState state;
  private final pythagoras.i.Dimension dim;

  private Value<Optional<Entity>> selectedEntity = Value.create(Optional.<Entity>absent());
  private final Map<Entity, Layer> entityLayerMap = new HashMap<>();

  public BoardScreen(MainGame game, BoardState state) {
    super(game);
    this.game = game;
    this.state = state;
    this.dim = state.dim;
    this.boardLayer = new GroupLayer();
    boardLayer.setSize(dim.width(), dim.height()).setOrigin(Layer.Origin.CENTER);
    this.boardLayer.addAt(createFieldGroupLayer().setDepth(Depths.fields), .5f, .5f);
    this.boardLayer.addAt(createEntityGroupLayer().setDepth(Depths.entities), .5f, .5f);
    initSelectedEntityListener();
  }

  @Override
  public void wasAdded() {
    super.wasAdded();
    Root root = iface.createRoot(new BorderLayout(), UiUtils.newSheet(plat.graphics()), layer);
    // We define a maximum view size. Otherwise sprites become really blurry and its just too big

    float width = Math.min(maxSize.width, plat.graphics().viewSize.width());
    float height = Math.min(maxSize.height, plat.graphics().viewSize.height());
    root.setSize(width, height);
    root.setLocation((plat.graphics().viewSize.width() - width) * .5f, (plat.graphics().viewSize.height() - height) * .5f);

    ScaledElement boardElement = new ScaledElement(boardLayer);
    boardElement.addStyles(Style.BACKGROUND.is(Background.blank().inset(10f)));

    root.add(boardElement.setConstraint(BorderLayout.CENTER));
  }

  private GroupLayer createFieldGroupLayer() {
    GroupLayer group = new GroupLayer();
    for (int fieldIndex = 0; fieldIndex < state.fieldCount; ++fieldIndex) {
      Layer fieldLayer = createFieldLayer(fieldIndex);
      int x = toX(dim, fieldIndex);
      int y = toY(dim, fieldIndex);
      group.addAt(fieldLayer, x, y);
    }
    return group;
  }

  private Layer createFieldLayer(final int fieldIndex) {
    int color = (toX(dim, fieldIndex) + toY(dim, fieldIndex)) % 2 == 0 ? 0xffB6B6B6 : 0xff8D9AB0;
    Layer l = Layers.solid(color, 1f - 2 * fieldGapWidth, 1f - 2 * fieldGapWidth).setOrigin(Layer.Origin.CENTER);
    l.events().connect(new Pointer.Listener() {
      @Override
      public void onStart(Pointer.Interaction iact) {
        if (selectedEntity.get().isPresent()) {
          Entity entity = selectedEntity.get().get();
          log.debug("Move entity", "entity", entity, "to fieldIndex", fieldIndex);
          selectedEntity.update(Optional.<Entity>absent());
          state.tryMoveCat(entity, fieldIndex);
        }
      }
    });

    return l;
  }

  private GroupLayer createEntityGroupLayer() {
    final GroupLayer group = new GroupLayer();
    state.entities.connectNotify(new RList.Listener<Entity>() {
      @Override
      public void onAdd(Entity entity) {
        Optional<Layer> layer = createEntityLayer(entity);
        if (!layer.isPresent()) return;
        group.add(layer.get());
        entity.fieldIndex.connectNotify(moveLayerWithFieldIndexSlot(layer.get()));
        entityLayerMap.put(entity, layer.get());
      }
      @Override
      public void onRemove(Entity entity) {
        Layer layer = entityLayerMap.remove(entity);
        if (layer != null) layer.close();
      }
    });
    return group;
  }

  private Optional<Layer> createEntityLayer(final Entity entity) {
    switch (entity.type) {
      case CAT: {
        final ImageLayer layer = new ImageLayer(game.images.cat);
        layer.setSize(1f, 1f).setOrigin(Layer.Origin.CENTER);
        layer.events().connect(new Pointer.Listener() {
          @Override
          public void onStart(Pointer.Interaction iact) {
            selectedEntity.update(Optional.of(entity));
          }
        });
        return Optional.<Layer>of(layer);
      }
      case MOUSE: {
        Entities.Mouse mouse = (Entities.Mouse) entity;
        final ImageLayer layer = new ImageLayer(game.images.mouse);
        layer.setSize(1f, 1f).setOrigin(Layer.Origin.CENTER);
        mouse.dir.connectNotify(rotateWithDirectionSlot(layer));
        return Optional.<Layer>of(layer);
      }
    }
    return Optional.absent();
  }

  private Slot<Integer> moveLayerWithFieldIndexSlot(final Layer layer) {
    return new Slot<Integer>() {
      @Override
      public void onEmit(Integer fieldIndex) {
        int x = toX(dim, fieldIndex);
        int y = toY(dim, fieldIndex);
        layer.setTranslation(x, y);
      }
    };
  }

  private Slot<Direction> rotateWithDirectionSlot(final Layer layer) {
    return new Slot<Direction>() {
      @Override
      public void onEmit(Direction dir) {
        layer.setRotation(dir.angle());
      }
    };
  }

  private void initSelectedEntityListener() {
    selectedEntity.connectNotify(new ValueView.Listener<Optional<Entity>>() {
      @Override
      public void onChange(Optional<Entity> value, Optional<Entity> oldValue) {
        if (oldValue != null && oldValue.isPresent()) {
          getEntityLayer(oldValue.get()).get().setTint(Colors.WHITE);
        }
        if (value.isPresent()) {
          getEntityLayer(value.get()).get().setTint(0xffff9999);
        }
      }
    });
  }

  private Optional<Layer> getEntityLayer(Entity entity) {
    return Optional.fromNullable(entityLayerMap.get(entity));
  }

  private interface Depths {
    float fields = -1f;
    float entities = 1f;
  }
}