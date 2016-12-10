package de.cdietze.ld37.core;

import react.Value;

public class Entities {

  public static class Vacuum extends Entity {
    public final Value<Direction> dir;

    public Vacuum(int initialFieldIndex, Direction initialDirection) {
      super(Type.VACUUM, initialFieldIndex);
      this.dir = Value.create(initialDirection);
    }
  }
}
