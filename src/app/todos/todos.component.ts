import { Component, OnInit } from '@angular/core';
import { GetListService } from '../get-list.service';
import { delay } from 'rxjs/operators';
import { TodoDataType } from '../todo-data-type';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  currentState: string = '';
  statusChange:string = '';
  listTodo: TodoDataType[] = [];

  constructor(private service: GetListService) {
    this.service.service().subscribe((data) => {
      if (data === '0') {
        this.currentState = 'error';
      } else {
        for (let i = 0; i < 10; i++) {
          this.listTodo.push(data[i]);
        }
        if (this.listTodo.length > 1) {
          this.currentState = 'loaded';
        }
      }
    });
  }
  changeStatus(status:string) {
    this.statusChange = status
  }

  ngOnInit() {}
}
