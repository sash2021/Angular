import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  clickedId;

  constructor(private activeRoute: ActivatedRoute) {
    this.activeRoute.params.subscribe(receivedId => {
      console.log(receivedId);
      this.clickedId = receivedId.id;
    });
  }

  ngOnInit() {}
}
