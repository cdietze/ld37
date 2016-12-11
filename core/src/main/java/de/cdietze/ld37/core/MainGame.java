package de.cdietze.ld37.core;

import playn.core.Platform;
import playn.scene.Layer;
import playn.scene.Pointer;
import playn.scene.SceneGame;
import pythagoras.i.Dimension;
import tripleplay.game.ScreenStack;
import tripleplay.game.trans.SlideTransition;
import tripleplay.util.Layers;

public class MainGame extends SceneGame {

  public final ScreenStack screens = new ScreenStack(this, rootLayer) {
    @Override
    protected Transition defaultPushTransition() {
      return new SlideTransition(this).left();
    }
    @Override
    protected Transition defaultPopTransition() {
      return new SlideTransition(this).right();
    }
  };

  public final ImageLoader.Images images;

  public MainGame(Platform plat) {
    super(plat, 33); // update our "simulation" 33ms (30 times per second)

    this.images = ImageLoader.loadImages(plat);
    // create and add background image layer
    Layer bgLayer = Layers.solid(0xff626262, plat.graphics().screenSize().width(), plat.graphics().screenSize().height());
    // scale the background to fill the screen
    //bgLayer.setSize(plat.graphics().viewSize);
    rootLayer.add(bgLayer);

    // Register Pointer so we can handle any pointer input (clicks, mouse/touch events etc.)
    new Pointer(plat, rootLayer, true);

    LevelGenerator.Level level = LevelGenerator.generate(new Dimension(8, 8));
    plat.log().info("Generated level", "level", level);
    BoardState boardState = new BoardState(level);
    screens.push(new BoardScreen(this, boardState));
  }
}
