package de.cdietze.ld37.core;

import com.google.common.base.Optional;
import com.google.common.collect.ImmutableList;
import pythagoras.i.Dimension;
import react.RList;
import react.Value;
import tripleplay.util.Logger;

import java.util.BitSet;
import java.util.List;

import static de.cdietze.ld37.core.PointUtils.*;

public class BoardState {
  public static final Logger log = new Logger("state");

  public final Dimension dim = new Dimension(8, 8);

  public final int fieldCount = dim.width * dim.height;
  public final RList<Entity> entities = RList.create();
  public final Entities.Vacuum vacuum;
  public final List<Value<Boolean>> explored = buildExplored(fieldCount);

  {
    vacuum = new Entities.Vacuum(56, Direction.UP);
    entities.add(vacuum);
    exploreNeighbors(vacuum.fieldIndex.get());
  }

  public boolean tryMoveVacuum(int target) {
    if (!isNeighbor(dim, vacuum.fieldIndex.get(), target)) return false;
    vacuum.fieldIndex.update(target);
    exploreNeighbors(target);
    return false;
  }

  public boolean tryMoveCat(Entity cat, int target) {
    int absX = Math.abs(toX(dim, cat.fieldIndex.get()) - toX(dim, target));
    int absY = Math.abs(toY(dim, cat.fieldIndex.get()) - toY(dim, target));
    if ((absX != 1 || absY != 2) && (absX != 2 || absY != 1)) return false;
    Optional<Entity> targetEntity = getEntityAt(target);
    if (targetEntity.isPresent() && targetEntity.get().type == Entity.Type.MOUSE) {
      entities.remove(targetEntity.get());
    } else if (targetEntity.isPresent()) return false;
    cat.fieldIndex.update(target);
    return true;
  }

  private static List<Value<Boolean>> buildExplored(int fieldCount) {
    ImmutableList.Builder<Value<Boolean>> builder = ImmutableList.builder();
    for (int i = 0; i < fieldCount; i++) {
      builder.add(Value.create(false));
    }
    return builder.build();
  }

  private void exploreNeighbors(int fieldIndex) {
    explored.get(fieldIndex).update(true);
    BitSet neighbors = PointUtils.neighbors(dim, fieldIndex);
    for (int neighbor = neighbors.nextSetBit(0); neighbor >= 0; neighbor = neighbors.nextSetBit(neighbor + 1)) {
      explored.get(neighbor).update(true);
    }
  }

  private Optional<Entity> getEntityAt(int index) {
    for (Entity entity : entities) {
      if (entity.fieldIndex.get() == index) return Optional.of(entity);
    }
    return Optional.absent();
  }
}
