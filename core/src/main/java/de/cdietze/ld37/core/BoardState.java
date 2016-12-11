package de.cdietze.ld37.core;

import com.google.common.base.Optional;
import com.google.common.base.Predicate;
import com.google.common.collect.ImmutableList;
import com.google.common.collect.Iterables;
import com.google.common.collect.Multiset;
import pythagoras.i.IDimension;
import react.IntValue;
import react.RList;
import react.Value;
import tripleplay.util.Logger;

import java.util.BitSet;
import java.util.List;

import static de.cdietze.ld37.core.PointUtils.isNeighbor;

public class BoardState {
  public static final Logger log = new Logger("state");

  public final IDimension dim;

  public final RList<Entity> entities = RList.create();
  public final Entities.Vacuum vacuum;
  public final List<Value<Boolean>> explored;
  public final IntValue dustRemaining = new IntValue(0);
  public final IntValue battery = new IntValue(10);

  public BoardState(LevelGenerator.Level level) {
    this.dim = level.dim;
    this.vacuum = new Entities.Vacuum(level.vacuumIndex, Direction.UP);
    this.entities.add(vacuum);
    for (Integer baseIndex : level.baseIndexes) {
      entities.add(Entities.createBase(baseIndex));
    }
    for (Multiset.Entry<Integer> entry : level.dustAmount.entrySet()) {
      entities.add(new Entities.Dust(entry.getElement(), entry.getCount(), this.dustRemaining));
    }

    entities.addAll(createCables());
    entities.addAll(createLint());
    this.explored = buildExplored(dim);
    explore(vacuum.fieldIndex.get());
  }

  private List<Entity> createCables() {
    ImmutableList.Builder<Entity> builder = ImmutableList.builder();
    BitSet indexes = new BitSet();
    for (Entity base : Iterables.filter(entities, entityTypePredicate(Entity.Type.BASE))) {
      indexes.set(base.fieldIndex.get());
      indexes.or(PointUtils.neighbors(dim, base.fieldIndex.get()));
    }
    for (int i = indexes.nextSetBit(0); i >= 0; i = indexes.nextSetBit(i + 1)) {
      builder.add(Entities.createCable(i));
    }
    return builder.build();
  }

  private List<Entity> createLint() {
    BitSet indexes = getLintIndexes();
    ImmutableList.Builder<Entity> builder = ImmutableList.builder();
    for (int i = indexes.nextSetBit(0); i >= 0; i = indexes.nextSetBit(i + 1)) {
      builder.add(Entities.createLint(i));
    }
    return builder.build();
  }

  private BitSet getLintIndexes() {
    BitSet indexes = new BitSet();
    for (Entity dust : Iterables.filter(entities, entityTypePredicate(Entity.Type.DUST))) {
      indexes.set(dust.fieldIndex.get());
      indexes.or(PointUtils.neighbors(dim, dust.fieldIndex.get()));
    }
    return indexes;
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
    if (dust.dustAmount.get() == 0) {
      entities.remove(dust);
    }
    cleanupLint();
  }

  private void cleanupLint() {
    BitSet lintIndexes = getLintIndexes();
    for (Entity lint : Iterables.filter(ImmutableList.copyOf(entities), entityTypePredicate(Entity.Type.LINT))) {
      if (!lintIndexes.get(lint.fieldIndex.get())) entities.remove(lint);
    }
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

  private static List<Value<Boolean>> buildExplored(IDimension dim) {
    int fieldCount = dim.width() * dim.height();
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

  private static Predicate<Entity> entityTypePredicate(final Entity.Type type) {
    return new Predicate<Entity>() {
      @Override
      public boolean apply(Entity entity) {
        return entity.type == type;
      }
    };
  }
}
