import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GetListService {
  todoObject: any;
  todoList = [];
  constructor(private http: HttpClient) {
    this.http
      .get('https://jsonplaceholder.typicode.com/todos')
      .subscribe((res) => {
        console.log
        this.todoObject = res;
        console.log(this.todoObject)
        this.todoList = [...this.todoObject];
      });
  }
}
