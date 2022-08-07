import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss']
})
export class YesNoButtonGroupComponent implements OnInit {
  @Input() public value: string = null;
  @Input() public label = '';
  // EventEmitter: vai emitir uma string
  // Lembre-se da convenção no qual a @Output() property deve ter o mesmo nome da
  // @Input() property acrescido com o sufixo Change
  @Output() public valueChange = new EventEmitter<string>();
  public options = YesNoButtonGroupOption;

  constructor() { }

  ngOnInit(): void {
  }

  public activate(value: string): void {
    this.value = value;
    // emit: notifica o mundo externo que o valor mudou
    this.valueChange.emit(this.value);
  }

}

enum YesNoButtonGroupOption {
  YES = 'yes',
  NO = 'no'
}
