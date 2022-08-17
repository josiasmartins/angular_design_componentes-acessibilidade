import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'a11y-p1';
  // public yesNoAnswer = 'no';
  public formGroup: UntypedFormGroup = null;

  constructor(formBuilder: UntypedFormBuilder) {
    this.formGroup = formBuilder.group({
      yesNoAnswer: [{
        value: 'no',
        disabled: false
      }]
    });
  }

  public submit(): void {
    this.formGroup.get('yesNoAnswer').disable();
    console.log(this.formGroup.value, 'ibag');
  }
}
