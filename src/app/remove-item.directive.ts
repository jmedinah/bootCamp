import { element } from 'protractor';
import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[RemoveItem]'
})
export class RemoveItemDirective {

  @HostListener('click') onclick() {
    this.display();
  }

  constructor(private elementRef: ElementRef) { }

  private display() {
    this.elementRef.nativeElement.remove();
  }
}
