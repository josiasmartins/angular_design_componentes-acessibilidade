import { Directive, ElementRef, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appKmItem]'
})
export class KeyboardManagerItemDirective {

  @Output() public focused = new EventEmitter<void>();

  constructor(
    // ElementRef: embrulha o dom
    private elementRef: ElementRef<HTMLElement>
  ) {}

  public focus(): void {
    this.elementRef.nativeElement.focus();
    this.focused.emit();
  }

  public isFocused(): boolean {
    return this.elementRef.nativeElement === document.activeElement;
  }
}