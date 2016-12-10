package de.cdietze.ld37.core;

import react.IntValue;
import react.Value;
import react.ValueView;

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

    public Dust(int initialFieldIndex, int amount, final IntValue dustRemaining) {
      super(Type.DUST, initialFieldIndex);
      dustAmount = new IntValue(amount);
      dustAmount.connectNotify(new ValueView.Listener<Integer>() {
        @Override
        public void onChange(Integer value, Integer oldValue) {
          int change = value - (oldValue != null ? oldValue : 0);
          dustRemaining.increment(change);
        }
      });
    }
  }
}
