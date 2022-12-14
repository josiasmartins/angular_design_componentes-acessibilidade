import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';

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
  @Input() disabled = false;
  @Input() public value: string = null;
  @Input() public label = '';
  // EventEmitter: vai emitir uma string
  // Lembre-se da convenção no qual a @Output() property deve ter o mesmo nome da
  // @Input() property acrescido com o sufixo Change
  @Output() public valueChange = new EventEmitter<string>();
  public id: string = null;
  public options = YesNoButtonGroupOption;
  public onChange = (value: string) => {};
  public onTouched = () => {};

  constructor(
    private uniqueIdService: UniqueIdService,
  ) {
    this.id = uniqueIdService.generateuniqueIdWithPrefix('yes-no-button-group')
  }

  ngOnInit(): void {
  }

  public writeValue(value: string): void {
    this.value = value;
    this.onChange(this.value);
    this.valueChange.emit(this.value)
  }

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
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
