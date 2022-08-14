import { Directive, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisabledControlDirective } from './disabled-control.directive';

@NgModule({
  declarations: [DisabledControlDirective],
  imports: [
    CommonModule,
  ],
  exports: [DisabledControlDirective]
})
export class DisabledControlModule {

}