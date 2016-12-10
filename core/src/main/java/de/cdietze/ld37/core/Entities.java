package de.cdietze.ld37.core;

public class Entities {

  public static Entity createCat(int fieldIndex) {
    return new Entity(Entity.Type.CAT, fieldIndex) {};
  }

  public static Entity createMouse(int fieldIndex) {
    return new Entity(Entity.Type.MOUSE, fieldIndex) {};
  }
}
