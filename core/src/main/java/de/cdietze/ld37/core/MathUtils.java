package de.cdietze.ld37.core;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Random;

public class MathUtils {

  public static List<Integer> shuffledRange(int size, Random random) {
    ArrayList<Integer> list = new ArrayList<>(size);
    for (int i = 0; i < size; ++i) list.add(i);
    shuffle(list, random);
    return list;
  }

  /** GWT does not emulate {@link java.util.Collections#shuffle(List, Random)} */
  public static void shuffle(List<?> list, Random random) {
    for (int index = 0; index < list.size(); index += 1) {
      Collections.swap(list, index, index + random.nextInt(list.size() - index));
    }
  }
}
