package de.cdietze.ld37.java;

import playn.java.LWJGLPlatform;

import de.cdietze.ld37.core.MainGame;

public class JavaMain {

  public static void main (String[] args) {
    LWJGLPlatform.Config config = new LWJGLPlatform.Config();
    // use config to customize the Java platform, if needed
    LWJGLPlatform plat = new LWJGLPlatform(config);
    new MainGame(plat);
    plat.start();
  }
}
