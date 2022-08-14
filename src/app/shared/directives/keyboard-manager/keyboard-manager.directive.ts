import { ContentChildren, Directive, HostListener, QueryList } from '@angular/core';
import { KeyboardManagerItemDirective } from './keyboard-manager-item.directive';

@Directive({
  selector: '[appKm]'
})
export class KeyboardManagerDirective {

  // Contentchild: busca todo mundo que é filho do elemento KeyboardManagerDirective
  // QueryList: atualiza dinamicamente as listas
  @ContentChildren(KeyboardManagerItemDirective) public items: QueryList<KeyboardManagerItemDirective> = null;

  @HostListener('keyup', ['$event'])
  public manageKeys(event: KeyboardEvent): void { 
    // event.key: dá acesso a tecla pressionado
    switch (event.key) {
      case 'ArrowUp': 
        this.moveFocus(ArrowDirective.RIGHT).focus();
        break;
      case 'ArrowDown':
        this.moveFocus(ArrowDirective.LEFT).focus();
        break;
      case 'ArrowLeft': 
        this.moveFocus(ArrowDirective.LEFT).focus();
        break;
      case 'ArrowRight':
        this.moveFocus(ArrowDirective.RIGHT).focus();
        break;
    }
  }

  public moveFocus(direction: ArrowDirective): KeyboardManagerItemDirective {
    const items = this.items.toArray();
    console.log(this.items)
    const currentSelectedIndex = items.findIndex(item => item.isFocused());
    const targetElementFocus = items[currentSelectedIndex + direction];

    if (targetElementFocus) {
      return targetElementFocus;
    }

    return direction === ArrowDirective.LEFT 
      ? items[items.length - 1]
      : items[0];
  }
}

enum ArrowDirective {
  LEFT = -1,
  RIGHT = 1
}