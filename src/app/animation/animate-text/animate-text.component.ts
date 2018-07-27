import { Component, OnInit } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-animate-text',
  templateUrl: './animate-text.component.html',
  styleUrls: ['./animate-text.component.css'],
  animations: [
    trigger('growUpAnimation', [
                                  state('kid', style({
                                    color: 'orange',
                                    transform: 'scale(2)'
                                  })),
                                  state('elder', style({
                                    color: 'brown',
                                    transform: 'scale(4)'
                                  })),
                                  transition('kid<=>elder', animate('1000ms ease-in'))
                                ]
            )
  ]
})
export class AnimateTextComponent implements OnInit {

  defaultAnimationState: String = 'kid';

  constructor() { }

  ngOnInit() {
  }

  growUpAnimation = function() {
    console.log('Hurray!!! I will grow up!!!');
    this.defaultAnimationState = this.defaultAnimationState === 'elder' ? 'kid' : 'elder';
    console.log(this.defaultAnimationState);

  };
}
