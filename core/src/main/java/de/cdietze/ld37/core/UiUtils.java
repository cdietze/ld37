package de.cdietze.ld37.core;

import playn.core.Font;
import playn.core.Graphics;
import playn.core.Platform;
import playn.scene.Layer;
import react.Slot;
import tripleplay.ui.*;
import tripleplay.ui.layout.AxisLayout;

public final class UiUtils {

//  #626262 default gray
//  #e3dacf wall color

  private UiUtils() {}

  public static Group createDialogGroup(Platform plat) {
    int bgColor = 0xFFe3dacf, ulColor = 0xFF626262;
    return new Group(AxisLayout.vertical()).setStyles(Style.BACKGROUND.is(Background.roundRect(plat.graphics(), bgColor, 5, ulColor, 2).inset(20f)));
  }

  public static Stylesheet.Builder newSheetBuilder(Graphics gfx) {
    return SimpleStyles.newSheetBuilder(gfx).add(Element.class, Style.FONT.is(new Font("Helvetica", 24)));
  }
  public static Stylesheet newSheet(Graphics gfx) { return newSheetBuilder(gfx).create(); }

  public static Slot<Boolean> visibiltySlot(final Layer layer) {
    return new Slot<Boolean>() {
      @Override
      public void onEmit(Boolean event) {
        layer.setVisible(event);
      }
    };
  }
}
