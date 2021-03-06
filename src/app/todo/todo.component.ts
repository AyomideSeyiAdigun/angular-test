import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  inputs: ['stateChange'],
})
export class TodoComponent implements OnInit {
  @Input() changingStatus: String;
  statusMeassage: string;
  constructor() {}
  ngOnChanges(changes: SimpleChanges) {
    if (this.changingStatus === 'completed') {
      document.getElementById('status').style.color = '#15e623';
      this.statusMeassage = ' Completed';
    }
  }

  ngOnInit() {
    this.statusMeassage = ' in progress';
  }
}
