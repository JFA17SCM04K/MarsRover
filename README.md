MARS ROVER PROBLEM: 
-------------------
Develop an api that moves a rover around on a grid.
You are given the initial starting point (x,y) of a rover and the direction (N,S,E,W) it is facing.
The rover receives a character array of commands.
Implement commands that move the rover forward/backward (f,b).
Implement commands that turn the rover left/right (l,r).
Implement wrapping from one edge of the grid to another. (planets are spheres after all)
Implement obstacle detection before each move to a new square. If a given sequence of commands encounters an obstacle, the rover moves up to the last possible point and reports the obstacle. 

The following tools, frameworks, and modules are required for this tutorial:
-----------------------------------------------------------------------------

Angular CLI 1.7.3
Angular 5
IDE or Text Editor
Jasmine/Karma

SETUP:
---------------------
1.Assuming that Node.js is installed, the first step is to update or install Angular CLI on Windows/Node command line.
npm install -g @angular/cli

2.Create the new Angular application:
ng new MarsRover

3.Create new component 'rover':
ng generate component rover



Running the App:
----------------
1.Download the code from github:
  https://github.com/JFA17SCM04K/MarsRover
2.Run npm install to install all the dependencies from the package.json.
