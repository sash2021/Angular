import { Component, OnInit } from '@angular/core';
import { CustomLocalService } from '../../services/custom-local.service';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-consume-service2',
  templateUrl: './consume-service2.component.html',
  styleUrls: ['./consume-service2.component.css']
})
export class ConsumeService2Component implements OnInit {
  constructor(private localservice2: CustomLocalService) {
    console.log('I am from service 2');
    console.log(localservice2.locations);
    console.log(localservice2.getLocalLocation());
    console.log('Removing one location');
    localservice2.locations.splice(3, 1);
    console.log(localservice2.locations);
  }

  ngOnInit() {}
}
