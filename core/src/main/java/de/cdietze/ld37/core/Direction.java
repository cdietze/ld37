package de.cdietze.ld37.core;

import pythagoras.i.IPoint;
import pythagoras.i.Point;

public enum Direction {
  UP {
    private final Point dir = new Point(0, -1);
    @Override
    public IPoint dir() { return dir; }
    public Direction rotateCCW() { return LEFT; }
    public float angle() {return 0;}
  }, DOWN {
    private final Point dir = new Point(0, 1);
    @Override
    public IPoint dir() { return dir; }
    public Direction rotateCCW() { return RIGHT; }
    public float angle() {return (float) Math.PI;}
  }, LEFT {
    private final Point dir = new Point(-1, 0);
    @Override
    public IPoint dir() { return dir; }
    public Direction rotateCCW() { return DOWN; }
    public float angle() {return (float) (1.5 * Math.PI);}
  }, RIGHT {
    private final Point dir = new Point(1, 0);
    @Override
    public IPoint dir() { return dir; }
    public Direction rotateCCW() { return UP; }
    public float angle() {return (float) (0.5 * Math.PI);}
  };

  protected abstract IPoint dir();
  public int x() { return dir().x(); }
  public int y() { return dir().y(); }

  public abstract Direction rotateCCW();
  /**
   * in radians
   */
  public abstract float angle();
}