package de.cdietze.ld37.core;

import de.cdietze.playn_util.ScaledElement;
import de.cdietze.playn_util.Screen;
import playn.scene.GroupLayer;
import playn.scene.Layer;
import pythagoras.f.Dimension;
import tripleplay.ui.Background;
import tripleplay.ui.Root;
import tripleplay.ui.Style;
import tripleplay.ui.layout.BorderLayout;
import tripleplay.util.Layers;

import static de.cdietze.ld37.core.PointUtils.toX;
import static de.cdietze.ld37.core.PointUtils.toY;

public class BoardScreen extends Screen {
  private static final float fieldGapWidth = 0.03f;
  private static final Dimension maxSize = new Dimension(1200, 800);
  public final MainGame game;

  /**
   * Has the dimension of the board, i.e. state.dim
   */
  public final GroupLayer boardLayer;
  private final BoardState state;
  private final pythagoras.i.Dimension dim;

  public BoardScreen(MainGame game, BoardState state) {
    super(game);
    this.game = game;
    this.state = state;
    this.dim = state.dim;
    this.boardLayer = new GroupLayer();
    boardLayer.setSize(dim.width(), dim.height()).setOrigin(Layer.Origin.CENTER);
    this.boardLayer.addAt(createFieldLayerGroup().setDepth(Depths.fields), .5f, .5f);
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

  private GroupLayer createFieldLayerGroup() {
    GroupLayer group = new GroupLayer();
    for (int fieldIndex = 0; fieldIndex < state.fieldCount; ++fieldIndex) {
      Layer fieldLayer = createFieldLayer(fieldIndex);
      int x = toX(dim, fieldIndex);
      int y = toY(dim, fieldIndex);
      group.addAt(fieldLayer, x, y);
    }
    return group;
  }

  private Layer createFieldLayer(int fieldIndex) {
    int color = (toX(dim, fieldIndex) + toY(dim, fieldIndex)) % 2 == 0 ? 0xffB6B6B6 : 0xff8D9AB0;
    Layer l = Layers.solid(color, 1f - 2 * fieldGapWidth, 1f - 2 * fieldGapWidth).setOrigin(Layer.Origin.CENTER);
    return l;
  }

  private interface Depths {
    float fields = -1f;
  }
}
