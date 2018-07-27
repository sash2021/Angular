import { Component, OnInit } from '@angular/core';
import { CustomRemoteService } from '../../services/custom-remote.service';

@Component({
  selector: 'app-consume-remote-service',
  templateUrl: './consume-remote-service.component.html',
  styleUrls: ['./consume-remote-service.component.css']
})
export class ConsumeRemoteServiceComponent implements OnInit {
  receivedData;

  constructor(private remoteService: CustomRemoteService) {}

  ngOnInit() {
    this.getRemoteData();
  }

  getRemoteData() {
    this.remoteService.getRemoteData().subscribe(remoteData => {
      console.log('Calling remote data after subscription');
      console.log(remoteData);
      this.receivedData = remoteData;
      console.log(this.receivedData);
    });
  }

  createUser = function(jsonUser) {
    var name = jsonUser.name;
    var username = jsonUser.username;
    var email = jsonUser.email;
    this.remoteService
      .createRemoteUser(name, username, email)
      .subscribe(response => {
        console.log('User Added Successfully');
      });
  };
}
