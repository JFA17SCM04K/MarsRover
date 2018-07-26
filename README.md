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

Jasmine/Karma

IDE or Text Editor


SETUP:
---------------------
1.Assuming that Node.js is installed, the first step is to update or install Angular CLI on Windows/Node command line.
npm install -g @angular/cli

2.Create the new Angular application:
ng new MarsRover

3.Create new component 'rover':
ng generate component rover

Application Logic:
------------------
Rover's movement is composed of two components : Rover Turning and Rover Moving. 

1. Rover Turning: Rover turning tells the current direction of the Rover. This is determined in the code using the 'direction' array. 
   direction = ['N','E','S','W'].
   Now, 
   For Rover to move 'l'- the 'direction' array needs to be traversed in the left direction.   
   
   For Rover to move 'r'- the 'direction' array needs to be traversed in the right direction.
   
   For Rover to move 'f'- the 'direction' of ROver remains the same as the current direction.
   
   For Rover to move 'b' - the direction gets toggled from N to S and vice-versa.
   
2. Rover Moving: Now, when the direction of motion of Rover has been decided ROver just needs to make a step forward. 
   
   If the direction of motion is N: the y-coordinate increases by 1.
   
   If the direction of motion is S: the y-coordinate decreases by 1.
   
   If the direction of motion is E: the x-coordinate increases by 1.
   
   If the direction of motion is W: the x-coordinate decreases by 1.
   
And before moving Rover, it is checked whether or not Rover is walking into an Obstacle. If the obstacle is encountered, an alert  message is sent.
   
   

Running the App:
----------------
1.Download the code from github:
  https://github.com/JFA17SCM04K/MarsRover
  
2.Run 'npm install' to install all the dependencies from the package.json.

3.To run the code - 'ng serve'
