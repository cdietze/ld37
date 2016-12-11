package de.cdietze.ld37.core;

import com.google.common.base.Optional;
import de.cdietze.playn_util.ScaledElement;
import de.cdietze.playn_util.Screen;
import playn.core.Color;
import playn.scene.GroupLayer;
import playn.scene.ImageLayer;
import playn.scene.Layer;
import playn.scene.Pointer;
import pythagoras.f.Dimension;
import pythagoras.f.MathUtil;
import react.Function;
import react.RList;
import react.Slot;
import tripleplay.ui.*;
import tripleplay.ui.layout.AxisLayout;
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

  private static final Dimension maxSize = new Dimension(1200, 800);
  public final MainGame game;

  /**
   * Has the dimension of the board, i.e. state.dim
   */
  public final GroupLayer boardLayer;
  private final BoardState state;
  private final pythagoras.i.IDimension dim;

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

    boardLayer.add(Layers.solid(0xffcccccc, dim.width(), dim.height()).setDepth(Depths.background));

    root.add(boardElement.setConstraint(BorderLayout.CENTER));

    root.add(
            new Group(AxisLayout.vertical()).add(
                    new Label(state.dustRemaining.map(new Function<Integer, String>() {
                      @Override
                      public String apply(Integer input) {
                        return "Dust Remaining: " + input;
                      }
                    })),
                    new Label(state.battery.map(new Function<Integer, String>() {
                      @Override
                      public String apply(Integer input) {
                        return "Battery Remaining: " + input;
                      }
                    }))

            ).setConstraint(BorderLayout.EAST));
  }

  private GroupLayer createFieldGroupLayer() {
    GroupLayer group = new GroupLayer();
    int fieldCount = dim.width() * dim.height();
    for (int fieldIndex = 0; fieldIndex < fieldCount; ++fieldIndex) {
      Layer fieldLayer = createFieldLayer(fieldIndex);
      int x = toX(dim, fieldIndex);
      int y = toY(dim, fieldIndex);
      group.addAt(fieldLayer, x, y);
    }
    return group;
  }

  private Layer createFieldLayer(final int fieldIndex) {
    final ImageLayer layer = new ImageLayer(game.images.parquet);
    layer.setSize(1f, 1f).setOrigin(Layer.Origin.CENTER);
    boolean isOdd = (toX(dim, fieldIndex) + toY(dim, fieldIndex)) % 2 == 0;
    if (isOdd) layer.setRotation(MathUtil.HALF_PI);
    state.explored.get(fieldIndex).connectNotify(new Slot<Boolean>() {
      @Override
      public void onEmit(Boolean explored) {
        layer.setTint(explored ? Colors.WHITE : Color.argb(0, 255, 255, 255));
      }
    });
    layer.events().connect(new Pointer.Listener() {
      @Override
      public void onStart(Pointer.Interaction iact) {
        state.tryMoveVacuum(fieldIndex);
      }
    });
    return layer;
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
      case VACUUM: {
        Entities.Vacuum vacuum = (Entities.Vacuum) entity;
        final ImageLayer layer = new ImageLayer(game.images.vacuum);
        layer.setDepth(Depths.vacuum);
        layer.setSize(1f, 1f).setOrigin(Layer.Origin.CENTER);
        vacuum.dir.connectNotify(rotateWithDirectionSlot(layer));
        return Optional.<Layer>of(layer);
      }
      case DUST: {
        Entities.Dust dust = (Entities.Dust) entity;
        final GroupLayer group = new GroupLayer();
        group.setDepth(Depths.entities);
        //group.setSize(1f, 1f).setOrigin(Layer.Origin.CENTER);
        dust.dustAmount.connectNotify(new Slot<Integer>() {
          @Override
          public void onEmit(Integer newDustAmount) {
            group.removeAll();
            if (newDustAmount == 0) return;
            final ImageLayer layer = new ImageLayer(game.images.dustList.get(newDustAmount - 1));
            layer.setSize(1f, 1f).setOrigin(Layer.Origin.CENTER);
            group.add(layer);
          }
        });
        state.explored.get(entity.fieldIndex.get()).connectNotify(UiUtils.visibiltySlot(group));
        return Optional.<Layer>of(group);
      }
      case BASE: {
        final ImageLayer layer = new ImageLayer(game.images.base);
        layer.setDepth(Depths.entities);
        layer.setSize(1f, 1f).setOrigin(Layer.Origin.CENTER);
        state.explored.get(entity.fieldIndex.get()).connectNotify(UiUtils.visibiltySlot(layer));
        return Optional.<Layer>of(layer);
      }
      case CABLE: {
        final ImageLayer layer = new ImageLayer(game.images.cable);
        layer.setSize(1f, 1f).setOrigin(Layer.Origin.CENTER);
        layer.setDepth(Depths.cables);
        state.explored.get(entity.fieldIndex.get()).connectNotify(UiUtils.visibiltySlot(layer));
        return Optional.<Layer>of(layer);
      }
      case LINT: {
        final ImageLayer layer = new ImageLayer(game.images.lint);
        layer.setSize(1f, 1f).setOrigin(Layer.Origin.CENTER);
        layer.setDepth(Depths.lint);
        state.explored.get(entity.fieldIndex.get()).connectNotify(UiUtils.visibiltySlot(layer));
        return Optional.<Layer>of(layer);
      }
      case MOUSE: {
        Entities.Mouse mouse = (Entities.Mouse) entity;
        final ImageLayer layer = new ImageLayer(game.images.mouse);
        layer.setSize(1f, 1f).setOrigin(Layer.Origin.CENTER);
        state.explored.get(mouse.fieldIndex.get()).connectNotify(UiUtils.visibiltySlot(layer));
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

  private Optional<Layer> getEntityLayer(Entity entity) {
    return Optional.fromNullable(entityLayerMap.get(entity));
  }

  private interface Depths {
    float background = 0f;
    float fields = 1f;
    float cables = 1.5f;
    float lint = 1.8f;
    float entities = 2f;
    float vacuum = 3f;
  }
}
