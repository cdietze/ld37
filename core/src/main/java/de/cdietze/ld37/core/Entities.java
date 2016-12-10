package de.cdietze.ld37.core;

import react.Value;

public class Entities {

  public static Entity createCat(int fieldIndex) {
    return new Entity(Entity.Type.CAT, fieldIndex) {};
  }

  public static class Mouse extends Entity {
    public final Value<Direction> dir;

    public Mouse(int initialFieldIndex, Direction initialDirection) {
      super(Type.MOUSE, initialFieldIndex);
      this.dir = Value.create(initialDirection);
    }
  }

  public static class Vacuum extends Entity {
    public final Value<Direction> dir;

    public Vacuum(int initialFieldIndex, Direction initialDirection) {
      super(Type.VACUUM, initialFieldIndex);
      this.dir = Value.create(initialDirection);
    }
  }
}
