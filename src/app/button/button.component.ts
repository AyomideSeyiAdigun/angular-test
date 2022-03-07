import {
  Component,
  OnInit,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
  EventEmitter
} from '@angular/core';
import { of } from 'rxjs';
import { delay,  concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  inputs: ['stateChange'],
})
export class ButtonComponent implements OnChanges, OnInit {
  @Input() stateChange = '';
  loadMessage: string;
  waitingMeassage: string;
  isDisable: boolean;

  @Output() listStateChange = new EventEmitter();

  constructor() {}
  ngOnChanges(changes: SimpleChanges) {
    if (this.stateChange === 'loaded') {
      document.getElementById('loading').style.display = 'none';
      this.loadMessage = 'Loaded-and-delaying ';
      document.getElementById('reloadBtn').style.display = 'block';
      this.displayLoaded();
      this.isDisable = true;
    } else if (this.stateChange === 'error') {
      document.getElementById('loading').style.display = 'none';
      this.loadMessage = 'Load Error.Retry';
      document.getElementById('reloadBtn').style.display = 'block';
    }
  }

  displayLoaded() {
    of(10, 9, 8, 7, 6, 5, 4, 3, 2, 1)
      .pipe(concatMap((item) => of(item).pipe(delay(1000))))
      .subscribe((e) => {
        this.waitingMeassage = 'wait ' + e + ' secs';

        if (e === 1) {
          this.stateChanged()
          this.isDisable = false;
          this.loadMessage = 'Reload';
          document.getElementById('counterDiv').style.display = 'none';
        }
      });
  }
  stateChanged() {
    this.listStateChange.emit('completed');
}

  ngOnInit() {}
}
