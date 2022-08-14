import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appKm]'
})
export class KeyboardManagerDirective {

  @HostListener('keyup', ['$event'])
  public manageKeys(event: KeyboardEvent): void { 
    // event.key: dá acesso a tecla pressionado
    switch (event.key) {
      case 'ArrowUp': 
        console.log('up');
        break;
      case 'ArrowDown':
        console.log('down');
        break;
      case 'ArrowLeft': 
        console.log('left');
        break;
      case 'ArrowRight':
        console.log('right');
        break;
    }
  }
}