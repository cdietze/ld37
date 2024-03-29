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
    public final Image parquet = plat.assets().getImage("images/parquet.png");
    public final Image base = plat.assets().getImage("images/base.png");
    public final Image mouse = plat.assets().getImage("images/mouse.png");
    public final Image cable = plat.assets().getImage("images/cable.png");
    public final Image lint = plat.assets().getImage("images/lint.png");
    public final Image walls = plat.assets().getImage("images/walls.png");
    public final Image battery = plat.assets().getImage("images/battery.png");
    public final List<Image> dustList = ImmutableList.of(
            plat.assets().getImage("images/dust1.png"),
            plat.assets().getImage("images/dust2.png"),
            plat.assets().getImage("images/dust3.png"),
            plat.assets().getImage("images/dust4.png"));
    public final List<Image> fluffList = ImmutableList.of(
            plat.assets().getImage("images/fluff1.png"),
            plat.assets().getImage("images/fluff2.png"),
            plat.assets().getImage("images/fluff3.png"),
            plat.assets().getImage("images/fluff4.png")
    );
  }
}
