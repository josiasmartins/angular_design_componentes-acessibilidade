import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appDisabledControl]'
})
export class DisabledControlDirective implements OnChanges {

  @Input() appDisabedControl = false;

  constructor(
    private ngControl: NgControl
  ) {}

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.appDisabedControl) {
      const action = this.appDisabedControl ? 'disable' : 'enable';
      this.ngControl.control[action]();
    }
  }


}