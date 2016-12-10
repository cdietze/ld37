package de.cdietze.ld37.core;

import com.google.common.base.Optional;
import pythagoras.i.Dimension;
import react.RList;
import tripleplay.util.Logger;

import static de.cdietze.ld37.core.PointUtils.*;

public class BoardState {
  public static final Logger log = new Logger("state");

  public final Dimension dim = new Dimension(8, 8);

  public final int fieldCount = dim.width * dim.height;
  public final RList<Entity> entities = RList.create();

  {
    entities.add(Entities.createCat(3));
    entities.add(Entities.createCat(4));
    entities.add(new Entities.Vacuum(56, Direction.UP));
    entities.add(new Entities.Mouse(51, Direction.UP));
    entities.add(new Entities.Mouse(52, Direction.RIGHT));
    entities.add(new Entities.Mouse(53, Direction.UP));
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
    runAi();
    return true;
  }

  private void runAi() {
    for (Entity entity : entities) {
      if (entity.type == Entity.Type.MOUSE) runMouse((Entities.Mouse) entity);
    }
  }

  private void runMouse(Entities.Mouse mouse) {
    if (!tryMoveMouseForward(mouse)) {
      // If mouse cannot move forward, turn left
      mouse.dir.update(mouse.dir.get().rotateCCW());
    }
  }

  private boolean tryMoveMouseForward(Entities.Mouse mouse) {
    int newIndex = addDirToIndex(dim, mouse.fieldIndex.get(), mouse.dir.get());
    if (newIndex < 0) return false; // cannot move off board
    if (getEntityAt(newIndex).isPresent()) return false; // target is occupied
    // TODO(?) check if target is protected
    mouse.fieldIndex.update(newIndex);
    return true;
  }

  private Optional<Entity> getEntityAt(int index) {
    for (Entity entity : entities) {
      if (entity.fieldIndex.get() == index) return Optional.of(entity);
    }
    return Optional.absent();
  }
}
