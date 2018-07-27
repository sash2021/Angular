import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mypipecomponent',
  templateUrl: './mypipecomponent.component.html',
  styleUrls: ['./mypipecomponent.component.css']
})
export class MypipecomponentComponent implements OnInit {

location = 'Chennai'
today = new Date()
message = 'check if this works'
salary = 1000000

  constructor() { }

  ngOnInit() {
  }

}
