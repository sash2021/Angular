import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {

@Input() angularVersion;

  constructor() { }

  ngOnInit() {
  }

}
