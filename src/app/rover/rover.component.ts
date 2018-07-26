import { Component, OnInit } from '@angular/core';
import { trigger,state,style, transition, animate } from '@angular/animations';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-rover',
  templateUrl: './rover.component.html',
  styleUrls: ['./rover.component.css'],
  animations: [
    trigger('divState', [
      state('start', style({
        'background-image': 'url("https://mi4.rightinthebox.com/images/50x50/201709/uoaybb1506045827944.jpg")',
        transform: 'translateX(0)'
      })),
      state('end', style({
        'background-image': 'url("https://mi4.rightinthebox.com/images/50x50/201709/uoaybb1506045827944.jpg")',
        transform: 'translateX(0)'
      })),
      transition('start => end', animate(300))
    ])
  ]
})

export class RoverComponent implements OnInit{
  //form to get the start point of Rover
  startForm: FormGroup;
  //form to get the obstacle position
  obstacleForm: FormGroup;
  //form to get the input of the  form
  commandForm: FormGroup;

  moveCommands = [];
  direction = ['N','E','S','W'];
  currentDirectionPointer = 0;
  newObstacle = {
    x: null,
    y: null
  };
  obstacles = [];
  presenceOfObstacle: boolean =false;
  currentDirection;
  alert: boolean = false;

  startPoint = {
    y: 0,
    x: 0,
    dir: 'N'
  }

  beginPoint = {
    y: null,
    x: null,
    dir: null
  }


  state = 'start';

  endPoint = {
    y: null,
    x: null,
    dir: null
  }



  ngOnInit(){
    //initializing the startForm
    this.startForm = new FormGroup({
      'xValue': new FormControl(0, Validators.required),
      'yValue': new FormControl(0, Validators.required),
      'direction': new FormControl('N', Validators.required)
    });
    //initializing the obstacleForm
    this.obstacleForm = new FormGroup({
      'xValue': new FormControl(0),
      'yValue': new FormControl(0)
    });
    //initializing the commandForm
    this.commandForm = new FormGroup({
      'commands': new FormControl(null, Validators.required)
    })


  }


  //getting the commands into an array
  onCommandsAdded(){
    this.moveCommands = (this.commandForm.value.commands).split("");
    console.log("Commands are: ");
    console.log(this.moveCommands);
  }


    //Getting the obstacles added and pushing into the obstacle array
    onObstaclesAdded(){
    this.newObstacle = {
      x: this.obstacleForm.value.xValue,
      y: this.obstacleForm.value.yValue
    };
    this.obstacles.push(this.newObstacle);
    console.log("the obstacle is added");
    console.log(this.obstacles);
  }

  onSubmit(){

      this.beginPoint.x = this.startForm.value.xValue;
      this.beginPoint.y = this.startForm.value.yValue;
      this.beginPoint.dir = this.startForm.value.direction;

      this.startPoint.x = this.startForm.value.xValue;
      this.startPoint.y = this.startForm.value.yValue;
      this.startPoint.dir = this.startForm.value.direction;

      console.log("The start point is:");
      console.log(this.startPoint);

}

startRover(){
      this.setCurrentDirectionPointer(this.startPoint.dir);
      this.setCurrentDirection();

      console.log("The commands are");
      console.log(this.moveCommands);
      console.log("The start point is:");
      console.log(this.startPoint);

      this.onTurn();
      this.state == 'start' ? this.state = 'end' : this.state = 'start';
}

setCurrentDirectionPointer(resultDir){
  for(var i=0;i<this.direction.length;i++){
    if(resultDir === this.direction[i]){
      this.currentDirectionPointer = i;
    }
  }
}

setCurrentDirection(){
  this.currentDirection = this.direction[this.currentDirectionPointer];
}

onTurn(){
  //Turning logic
  for(var i=0;i<this.moveCommands.length;i++){
    if(this.moveCommands[i] == 'l'){
      if(this.currentDirectionPointer == 0){
        this.currentDirectionPointer = 3;
      }else{
        this.currentDirectionPointer -= 1;
      }

      this.setCurrentDirection();
      this.moveTheObject();

    }
    if(this.moveCommands[i] == 'r'){
      if(this.currentDirectionPointer == 3){
        this.currentDirectionPointer = 0;
      }else{
        this.currentDirectionPointer += 1;
      }

      this.setCurrentDirection();
      this.moveTheObject();
    }
    if(this.moveCommands[i] == 'f'){
      this.moveTheObject();
    }
    if(this.moveCommands[i] == 'b'){
      if(this.currentDirectionPointer == 0 || this.currentDirectionPointer == 1){
        this.currentDirectionPointer += 2;
      }else{
        this.currentDirectionPointer -= 2;
      }
      this.setCurrentDirection();
      this.moveTheObject();
    }

  }

  this.endPoint = {
    x: this.startPoint.x,
    y: this.startPoint.y,
    dir: this.startPoint.dir
  }

  console.log("the end point is:");
  console.log(this.endPoint);
}

  moveTheObject(){
    //moving the rover logic
      if(this.currentDirection == 'N'){
        this.startPoint.y += 1;
        this.checkRange();
        if(this.presenceOfObstacle){
          this.startPoint.y -= 1;
          this.presenceOfObstacle = false;
        }
      }
      if(this.currentDirection == 'S'){
        this.startPoint.y -= 1;
        this.checkRange();
        if(this.presenceOfObstacle){
          this.startPoint.y += 1;
          this.presenceOfObstacle = false;
        }
      }
      if(this.currentDirection == 'E'){
        this.startPoint.x += 1;
        this.checkRange();
        if(this.presenceOfObstacle){
          this.startPoint.x -= 1;
          this.presenceOfObstacle = false;
        }
      }
      if(this.currentDirection == 'W'){
        this.startPoint.x -= 1;
        this.checkRange();
        if(this.presenceOfObstacle){
          this.startPoint.x += 1;
          this.presenceOfObstacle = false;
        }
      }
      this.startPoint.dir = this.currentDirection;
      // console.log("The step moved is: ");
      // console.log(this.startPoint);
    }


  checkRange(){
    if(this.startPoint.x < 0){
      this.startPoint.x = 0;
    }
    if(this.startPoint.x > 5){
      this.startPoint.x = 5;
    }
    if(this.startPoint.y < 0 ){
      this.startPoint.y = 0;
    }
    if(this.startPoint.y > 5){
      this.startPoint.y = 5;
    }

    //checking for obstacle
    for(var i=0;i<this.obstacles.length;i++){
      if(this.obstacles[i].x == this.startPoint.x && this.obstacles[i].y == this.startPoint.y){
        console.log("Alert! Obstacle is present");
        this.alert = true;
        this.presenceOfObstacle = true;
      }
    }

  }

}
