package de.cdietze.ld37.android;

import playn.android.GameActivity;

import de.cdietze.ld37.core.MainGame;

public class MainActivity extends GameActivity {

  @Override public void main () {
    new MainGame(platform());
  }
}
