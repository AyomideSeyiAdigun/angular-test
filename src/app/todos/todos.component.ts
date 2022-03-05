import { Component, OnInit } from '@angular/core';
import { GetListService } from '../get-list.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  listTodo;
  constructor(service: GetListService) {
   this.listTodo=service
   console.log(this.listTodo)
    
  }

  ngOnInit() {}

  displayTheList = () => {};
}
