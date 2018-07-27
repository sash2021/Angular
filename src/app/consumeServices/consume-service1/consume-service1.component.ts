import { Component, OnInit } from '@angular/core';
import { CustomLocalService } from '../../services/custom-local.service';
import { cleanSession } from 'selenium-webdriver/safari';

@Component({
  selector: 'app-consume-service1',
  templateUrl: './consume-service1.component.html',
  styleUrls: ['./consume-service1.component.css']
})
export class ConsumeService1Component implements OnInit {

  constructor(private localservice1: CustomLocalService) {
    console.log('I am from service 1');
    console.log(localservice1.locations);
    console.log(localservice1.getLocalLocation());
    localservice1.locations.push('Cochin');
    console.log('Pushing new location');
    console.log(localservice1.locations);
   }

  ngOnInit() {
  }

}
