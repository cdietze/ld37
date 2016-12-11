package de.cdietze.ld37.core;

import com.google.common.base.Optional;
import com.google.common.collect.ImmutableList;
import pythagoras.i.Dimension;
import react.IntValue;
import react.RList;
import react.Value;
import tripleplay.util.Logger;

import java.util.List;

import static de.cdietze.ld37.core.PointUtils.isNeighbor;

public class BoardState {
  public static final Logger log = new Logger("state");

  public final Dimension dim = new Dimension(8, 8);

  public final int fieldCount = dim.width * dim.height;
  public final RList<Entity> entities = RList.create();
  public final Entities.Vacuum vacuum;
  public final List<Value<Boolean>> explored = buildExplored(fieldCount);
  public final IntValue dustRemaining = new IntValue(0);
  public final IntValue battery = new IntValue(0);

  {
    vacuum = new Entities.Vacuum(56, Direction.UP);
    entities.add(vacuum);
    entities.add(Entities.createBase(vacuum.fieldIndex.get()));
    entities.add(Entities.createCable(vacuum.fieldIndex.get()));
    entities.add(Entities.createBase(0));
    entities.add(Entities.createCable(0));
    entities.add(Entities.createCable(1));
    entities.add(Entities.createCable(8));
    entities.add(Entities.createCable(9));
    entities.add(Entities.createLint(9));
    entities.add(Entities.createLint(10));
    entities.add(new Entities.Dust(57, 4, dustRemaining));
    entities.add(new Entities.Dust(60, 4, dustRemaining));
    entities.add(new Entities.Mouse(62, Direction.UP));
    explore(vacuum.fieldIndex.get());
    battery.update(10);
  }

  public boolean tryMoveVacuum(int target) {
    if (!canMoveHere(target)) return false;
    vacuum.fieldIndex.update(target);
    explore(target);
    tryToCollectDust();
    consumeBattery();
    tryToRechargeBattery();
    return false;
  }

  private boolean canMoveHere(int target) {
    return canMoveOneFieldHere(target)
            || canStayHere(target)
            || isExploredBase(target);
  }

  private boolean canMoveOneFieldHere(int target) {
    return battery.get() > 0 && isNeighbor(dim, vacuum.fieldIndex.get(), target);
  }

  private boolean canStayHere(int target) {
    return battery.get() > 0 && target == vacuum.fieldIndex.get() && getEntityAt(target, Entity.Type.DUST).isPresent();
  }

  private boolean isExploredBase(int target) {
    return explored.get(target).get() && getEntityAt(target, Entity.Type.BASE).isPresent();
  }

  private void tryToCollectDust() {
    Optional<Entity> entity = getEntityAt(vacuum.fieldIndex.get(), Entity.Type.DUST);
    if (!entity.isPresent()) return;
    Entities.Dust dust = (Entities.Dust) entity.get();
    dust.dustAmount.decrementClamp(1, 0);
  }

  private void consumeBattery() {
    battery.decrementClamp(1, 0);
  }
  private void tryToRechargeBattery() {
    Optional<Entity> base = getEntityAt(vacuum.fieldIndex.get(), Entity.Type.BASE);
    if (base.isPresent()) {
      battery.update(10);
    }
  }

  private static List<Value<Boolean>> buildExplored(int fieldCount) {
    ImmutableList.Builder<Value<Boolean>> builder = ImmutableList.builder();
    for (int i = 0; i < fieldCount; i++) {
      builder.add(Value.create(false));
    }
    return builder.build();
  }

  private void explore(int fieldIndex) {
    explored.get(fieldIndex).update(true);
  }

  private Optional<Entity> getEntityAt(int index, Entity.Type type) {
    for (Entity entity : entities) {
      if (entity.type == type && entity.fieldIndex.get() == index) return Optional.of(entity);
    }
    return Optional.absent();
  }
}
