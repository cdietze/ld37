package de.cdietze.ld37.core;

import playn.core.Image;
import playn.core.Platform;

public class ImageLoader {
  private final Platform plat;
  private ImageLoader(Platform plat) {this.plat = plat;}

  public static Images loadImages(Platform plat) {
    return new ImageLoader(plat).new Images();
  }

  public class Images {
    public final Image cat = plat.assets().getImage("images/cat.png");
    public final Image mouse = plat.assets().getImage("images/mouse.png");
  }
}
