package de.cdietze.ld37.core;

import com.google.common.base.MoreObjects;
import react.IntValue;

public class Entity {
  public final Type type;
  public final IntValue fieldIndex;

  public Entity(Type type, int initialFieldIndex) {
    this.type = type;
    fieldIndex = new IntValue(initialFieldIndex);
  }

  @Override
  public String toString() {
    return MoreObjects.toStringHelper(this)
            .add("type", type)
            .add("fieldIndex", fieldIndex)
            .toString();
  }

  enum Type {
    MOUSE, VACUUM, DUST, BASE, CABLE, LINT;
  }
}
