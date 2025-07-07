import { Directive, ElementRef, OnInit } from '@angular/core';

import { SwingStackDirective } from './swing-stack.directive';
import { Card } from '../interfaces/swing';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[swingCard]'
})
export class SwingCardDirective implements OnInit {
  public card: Card;

  constructor(
    private elementRef: ElementRef,
    private swingStack: SwingStackDirective
  ) {
  }

  ngOnInit() {
    this.card = this.swingStack.addCard(this);
  }

  getElementRef() {
    return this.elementRef;
  }

  getNativeElement() {
    return this.elementRef.nativeElement;
  }

  getCard(): Card {
    return this.card;
  }
}
