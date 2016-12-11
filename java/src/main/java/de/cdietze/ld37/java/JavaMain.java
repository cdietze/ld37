package de.cdietze.ld37.java;

import de.cdietze.ld37.core.MainGame;
import playn.java.LWJGLPlatform;

public class JavaMain {

  public static void main(String[] args) {
    LWJGLPlatform.Config config = new LWJGLPlatform.Config();
    // 900x600 is the max window size of the embedded ludumdate.com window
//     config.width = 900;
//     config.height = 600;

    config.width = 1280;
    config.height = 1024;
    // use config to customize the Java platform, if needed
    LWJGLPlatform plat = new LWJGLPlatform(config);
    new MainGame(plat);
    plat.start();
  }
}
