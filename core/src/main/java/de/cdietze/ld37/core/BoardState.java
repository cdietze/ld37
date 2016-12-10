package de.cdietze.ld37.core;

import com.google.common.base.Optional;
import pythagoras.i.Dimension;
import react.RList;
import tripleplay.util.Logger;

import static de.cdietze.ld37.core.PointUtils.toX;
import static de.cdietze.ld37.core.PointUtils.toY;

public class BoardState {
  public static final Logger log = new Logger("state");

  public final Dimension dim = new Dimension(8, 8);

  public final int fieldCount = dim.width * dim.height;
  public final RList<Entity> entities = RList.create();

  {
    entities.add(Entities.createCat(3));
  }

  public boolean tryMoveCat(Entity cat, int target) {
    if (getEntityAt(target).isPresent()) return false;
    int absX = Math.abs(toX(dim, cat.fieldIndex.get()) - toX(dim, target));
    int absY = Math.abs(toY(dim, cat.fieldIndex.get()) - toY(dim, target));
    if ((absX != 1 || absY != 2) && (absX != 2 || absY != 1)) return false;
    cat.fieldIndex.update(target);
    return true;
  }

  private Optional<Entity> getEntityAt(int index) {
    for (Entity entity : entities) {
      if (entity.fieldIndex.get() == index) return Optional.of(entity);
    }
    return Optional.absent();
  }
}
