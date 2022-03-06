import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {delay} from 'rxjs/operators'
@Injectable()
export class GetListService {
  constructor(private http: HttpClient) {
    
    

  }
  service(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos').pipe(delay(4000))
  }

 
 
  
}
