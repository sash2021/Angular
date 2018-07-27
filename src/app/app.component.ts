import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Angular App';
  name  = 'Santhosh';

  sayHello = function() {
    console.log('Hello from app component!!');
  };
}
