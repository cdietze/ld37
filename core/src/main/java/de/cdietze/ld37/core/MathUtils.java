package de.cdietze.ld37.core;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Random;

public class MathUtils {

  public static List<Integer> shuffledRange(int size, Random random) {
    ArrayList<Integer> list = new ArrayList<>(size);
    for (int i = 0; i < size; ++i) list.add(i);
    Collections.shuffle(list, random);
    return list;
  }
}
