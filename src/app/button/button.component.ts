import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  inputs: ['stateChange'],
})
export class ButtonComponent implements OnChanges, OnInit {
  @Input() stateChange = '';

  constructor() {}
  ngOnChanges(changes: SimpleChanges) {
    if (this.stateChange === 'loaded') {
      document.getElementById('loading').style.display = 'none';
      document.getElementById('reloadBtn').style.display = 'block';
    }
  }

  ngOnInit() {}
}
