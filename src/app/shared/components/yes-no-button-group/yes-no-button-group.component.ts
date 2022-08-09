import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss'],
  providers: [
    {
      /**
       * NG_VALUE_ACESSOR: É um injection token que marca nosso componente para que
       * seja injetado dentro da infraestrutura do formGroup.
       */
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      // useExisting: use alguém
      // forwardRef(): mostra só quando tiver a referencia
      /**
       * forwardRef: É usado quando o token ao qual precisamos nos referir para fins de DI é declarado, mas ainda não definido
       */
      useExisting: forwardRef(() => YesNoButtonGroupComponent)
    }
  ]
})
export class YesNoButtonGroupComponent implements OnInit, ControlValueAccessor {
  @Input() public value: string = null;
  @Input() public label = '';
  // EventEmitter: vai emitir uma string
  // Lembre-se da convenção no qual a @Output() property deve ter o mesmo nome da
  // @Input() property acrescido com o sufixo Change
  @Output() public valueChange = new EventEmitter<string>();
  public options = YesNoButtonGroupOption;
  public onChange = (value: string) => {};
  public onTouched = () => {};

  constructor() { }

  ngOnInit(): void {
  }

  public writeValue(value: string): void {
    this.value = value;
    this.onChange(this.value)
  }

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }


  public activate(value: string): void {
    // this.value = value;
    // // emit: notifica o mundo externo que o valor mudou
    // this.valueChange.emit(this.value);
    this.writeValue(value)
  }

}

enum YesNoButtonGroupOption {
  YES = 'yes',
  NO = 'no'
}
