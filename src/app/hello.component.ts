import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'hello',
  templateUrl: './mainTodo.component.html',
  styleUrls: ['./mainTodo.component.css'],
})
export class HelloComponent implements OnInit {
  @Input() name: string;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('https://jsonplaceholder.typicode.com/todos')
      .subscribe((res) => {
        console.log(res);
      });
  }
}
