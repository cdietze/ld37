package de.cdietze.ld37.core;

import react.IntValue;
import react.Value;

public class Entities {

  public static class Vacuum extends Entity {
    public final Value<Direction> dir;

    public Vacuum(int initialFieldIndex, Direction initialDirection) {
      super(Type.VACUUM, initialFieldIndex);
      this.dir = Value.create(initialDirection);
    }
  }

  public static class Dust extends Entity {

    public final IntValue dustAmount;

    public Dust(int initialFieldIndex, int amount) {
      super(Type.DUST, initialFieldIndex);
      dustAmount = new IntValue(amount);
    }
  }
}
