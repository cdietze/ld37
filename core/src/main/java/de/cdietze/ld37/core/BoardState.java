package de.cdietze.ld37.core;

import pythagoras.i.Dimension;
import react.RList;
import tripleplay.util.Logger;

public class BoardState {
  public static final Logger log = new Logger("state");

  public final Dimension dim = new Dimension(8, 8);

  public final int fieldCount = dim.width * dim.height;
  public final RList<Entity> entities = RList.create();
}
