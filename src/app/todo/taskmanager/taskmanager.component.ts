import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taskmanager',
  templateUrl: './taskmanager.component.html',
  styleUrls: ['./taskmanager.component.css']
})
export class TaskmanagerComponent implements OnInit {

  project = "Task Manager App (Bare Bone)";
  task = ""
  taskList = []

  constructor() { }

  ngOnInit() {
    //this.setCounter()
    this.setTasks()
    console.log("default task list:")
    console.log(this.taskList)
  }

  addTask = function () {
    
    console.log("I am in AddTask Function");
    this.taskList.push(this.task)
    console.log(this.taskList)

    //var currentCounter = Number(localStorage.getItem("taskCounter")) + 1

    if (typeof (Storage) !== "undefined") {
      // //Code for locaStorage/sessionStorage
      // localStorage.setItem("task_number_" + currentCounter, this.task)
      // //this.addCounter = this.addCounter + 1
      // localStorage.setItem("taskCounter", String(currentCounter))
      localStorage.setItem('added-tasks', JSON.stringify(this.taskList));
    }
    else {
      console.log("Sorry! No web storage support...")
    }

    this.task = ""
  }

  // setCounter = function () {
  //   if (localStorage.getItem("taskCounter") == null) {
  //     localStorage.setItem("taskCounter", "1")
  //   }
  //   console.log(localStorage.getItem("taskCounter"))
  // }

  setTasks = function(){
    if (localStorage.getItem("added-tasks") != null){
    this.taskList = JSON.parse(localStorage.getItem("added-tasks"))
    }
  }

  removeTask(getCounter) {
    console.log("Remove Task: " + getCounter)
    this.taskList.splice(getCounter, 1)
    localStorage.setItem('added-tasks', JSON.stringify(this.taskList));
  }

}
