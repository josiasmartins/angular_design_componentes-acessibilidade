import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appKmItem]'
})
export class KeyboardManagerItemDirective {
  constructor(
    // ElementRef: embrulha o dom
    private elementRef: ElementRef<HTMLElement>
  ) {}

  public focus(): void {
    this.elementRef.nativeElement.focus();
  }

  public isFocused(): boolean {
    return this.elementRef.nativeElement === document.activeElement;
  }
}