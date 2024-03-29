package de.cdietze.ld37.html;

import com.google.gwt.core.client.EntryPoint;
import playn.html.HtmlPlatform;
import de.cdietze.ld37.core.MainGame;

public class HtmlMain implements EntryPoint {

  @Override public void onModuleLoad () {
    HtmlPlatform.Config config = new HtmlPlatform.Config();
    // use config to customize the HTML platform, if needed
    HtmlPlatform plat = new HtmlPlatform(config);
    plat.assets().setPathPrefix("ld37/");
    new MainGame(plat);
    plat.start();
  }
}
