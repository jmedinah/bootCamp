import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appZoomIn]'
})
export class ZoomInDirective {

  @HostListener('mouseenter') onmouseenter() {
    this.ZoomIn();
  }

  @HostListener('mouseleave') onmouseleave() {
    this.ZoomOut();
  }

  constructor(private elementRef: ElementRef) { }

  private ZoomIn() {
    this.elementRef.nativeElement.style.fontSize = "24px";
  }

  private ZoomOut() {
    this.elementRef.nativeElement.style.fontSize = "14px";
  }

}
