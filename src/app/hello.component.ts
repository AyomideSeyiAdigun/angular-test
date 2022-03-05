import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'hello',
  templateUrl: './mainTodo.component.html',
  styleUrls: ['./mainTodo.component.css'],
})
export class HelloComponent implements OnInit {
  @Input() name: string;
  li: any;
  todoList = [];
  throwError: boolean = false;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe(
      (res) => {
        if (res) {
          hidespinner();
        }
        this.li = res;
        this.todoList = [...this.li];
      },
      (error) => {
        //Handle the error here
        displayErrorBtn();

        throw error;
      }
    );

    function hidespinner() {
      document.getElementById('loading').style.display = 'none';
      setTimeout(function () {
        document.getElementById('reloadBtn').style.display = 'block';
      }, 5000);
    }
    function displayErrorBtn() {
      document.getElementById('loading').style.display = 'none';
      document.getElementById('reloadBtn').style.display = 'block';kh
    }
  }
}
