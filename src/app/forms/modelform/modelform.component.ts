import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modelform',
  templateUrl: './modelform.component.html',
  styleUrls: ['./modelform.component.css']
})
export class ModelformComponent implements OnInit {

  userModelForm;

  constructor() { }

  ngOnInit() {
    this.userModelForm = new FormGroup(
      {
        name: new FormControl('', Validators.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.pattern('^[a-zA-Z]+$')
          ]
        )),
        age: new FormControl('', Validators.compose([
          Validators.required,
          Validators.min(25),
          Validators.max(45)
        ])),
        gender: new FormControl('', Validators.required)

      }
    );
  }
  userData = function (v) {
    console.log(v);
  };
}
