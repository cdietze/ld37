package de.cdietze.ld37.core;

import com.google.common.collect.ImmutableList;
import playn.core.Image;
import playn.core.Platform;

import java.util.List;

public class ImageLoader {
  private final Platform plat;
  private ImageLoader(Platform plat) {this.plat = plat;}

  public static Images loadImages(Platform plat) {
    return new ImageLoader(plat).new Images();
  }

  public class Images {
    public final Image vacuum = plat.assets().getImage("images/vacuum.png");
    public final List<Image> dustList = ImmutableList.of(
            plat.assets().getImage("images/dust1.png"),
            plat.assets().getImage("images/dust2.png"),
            plat.assets().getImage("images/dust3.png"),
            plat.assets().getImage("images/dust4.png"));
  }
}
