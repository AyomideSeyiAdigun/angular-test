import { Component, OnInit } from '@angular/core';
import { GetListService } from '../get-list.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  currentState=''
  listTodo;
 
  constructor(private service: GetListService) {
    this.service.service().subscribe((data) => {
      this.listTodo= data;
      if( this.listTodo.length > 1){
        this.currentState = 'loaded'
      }
    });
  }

  ngOnInit() {}


}
