import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'a11y-p1';
  // public yesNoAnswer = 'no';
  public formGroup: FormGroup = null;

  constructor(formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({
      yesNoAnswer: ['no']
    });
  }

  public submit(): void {
    console.log(this.formGroup.value);
  }
}
