import { Component, Input } from '@angular/core';

@Component({
  selector: 'main_Page',
  template: `./todo/mainPage.component.ts`,
  styleUrls: [ './todo/mainPage.component.css' ]
})
export class Main_PageComponent  {
  @Input() name: string;
}
