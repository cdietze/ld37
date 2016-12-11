package de.cdietze.ld37.core;

import com.google.common.base.MoreObjects;
import com.google.common.collect.HashMultiset;
import com.google.common.collect.Multiset;
import pythagoras.i.IDimension;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class LevelGenerator {

  private static final Random random = new Random();

  public static class Level {
    public final IDimension dim;
    public int vacuumIndex;
    public final List<Integer> baseIndexes = new ArrayList<>();
    public final Multiset<Integer> dustAmount = HashMultiset.create();

    public Level(IDimension dim) {
      this.dim = dim;
      vacuumIndex = PointUtils.toIndex(dim, 0, dim.height() - 1);
      dustAmount.add(48, 4);
    }

    @Override
    public String toString() {
      return MoreObjects.toStringHelper(this)
              .add("dim", dim)
              .add("vacuumIndex", vacuumIndex)
              .add("baseIndexes", baseIndexes)
              .add("dustAmount", dustAmount)
              .toString();
    }
  }

  public static Level generate(IDimension dim) {
    return new LevelGenerator(dim).level;
  }

  private final IDimension dim;
  private final Level level;

  private LevelGenerator(IDimension dim) {
    this.dim = dim;
    this.level = new Level(dim);
    level.baseIndexes.add(level.vacuumIndex);
    addAdditionalBases(3);
    addDust();
  }

  private void addAdditionalBases(int totalBaseCount) {
    double edge = Math.sqrt(dim.width() * dim.height());
    int minDist = (int) Math.ceil(edge * .5);
    int maxDist = (int) Math.floor(edge * 1.5);
    canidateLoop:
    for (int candidateIndex : MathUtils.shuffledRange(dim.width() * dim.height(), random)) {
      if (level.baseIndexes.size() >= totalBaseCount) return;
      // Check that candidateIndex has a minimum distance to existing bases
      for (int existingBaseIndex : level.baseIndexes) {
        int dist = PointUtils.orthogonalDistance(dim, candidateIndex, existingBaseIndex);
        if (dist < minDist || dist > maxDist) continue canidateLoop;
      }
      level.baseIndexes.add(candidateIndex);
    }
  }

  private void addDust() {
    int minDustAmount = (int) (.5 * dim.width() * dim.height());
    for (Integer candidateIndex : MathUtils.shuffledRange(dim.width() * dim.height(), random)) {
      if (level.dustAmount.size() >= minDustAmount) return;
      if (level.baseIndexes.contains(candidateIndex)) continue;
      level.dustAmount.setCount(candidateIndex, 4);
      // Make sure that all dust-4s are surrounded by dust-2s
      for (int neighbor : PointUtils.neighborsList(dim, candidateIndex)) {
        level.dustAmount.setCount(neighbor, Math.max(2, level.dustAmount.count(neighbor)));
      }
    }
  }
}
