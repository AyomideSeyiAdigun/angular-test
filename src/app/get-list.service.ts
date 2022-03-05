import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GetListService {
  constructor(private http: HttpClient) {
  }

  getNow() {
    this.http
      .get('https://jsonplaceholder.typicode.com/todos')
      .subscribe((res) => {
        return res;
      });
  }
}
