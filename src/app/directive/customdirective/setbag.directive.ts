import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSetbag]'
})
export class SetbagDirective {

  constructor(private el: ElementRef) {

    el.nativeElement.style.color = 'lightgreen';
    el.nativeElement.style.backgroundColor = 'black';
    el.nativeElement.style.fontSize = '44px';

   }

}
