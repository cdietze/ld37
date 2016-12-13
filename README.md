# My Ludum Dare #37 compo entry
 
Theme is "One Room".

## Description

You control a vacuum robot and need to get the room clean again. 
The vacuum only moves one square at a time. 
Each move consumes 1 battery. 
When you run out of battery you need to return to a recharge station (the vacuum teleports there). 
There are 3 recharge stations in the room. 

The room is initially unexplored. 
However, there are some hints to guide you: 
- Dust is surrounded by lint 
- Recharge stations are surrounded by cables 

Control: mouse only. 
No sound. 

Tools: 
- Java - PlayN (https://github.com/playn/playn) 
- Vectr for drawing (https://vectr.com/)

## Links

[Play it in your browser here](http://cdietze.github.io/ld37/)

[Entry to the #37 Ludum Dare compo](http://ludumdare.com/compo/ludum-dare-37/?action=preview&uid=67399)

## Build

To build it run `mvn clean install`.

To build and start the Java version run `mvn -Pjava clean install`.

To build and a start the HTML version - you can then view it on localhost:8080 - run `mvn -Phtml clean install`.
