import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grand-father',
  templateUrl: './grand-father.component.html',
  styleUrls: ['./grand-father.component.css']
})
export class GrandFatherComponent implements OnInit {

  angularVersion = 'angular6.x';

  constructor() { }

  ngOnInit() {
  }

}
