import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todo/todo.component';
import { GetListService } from './get-list.service';
import { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [BrowserModule, FormsModule,HttpClientModule ],
  declarations: [AppComponent,TodosComponent,TodoComponent,ButtonComponent],
  providers:[GetListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
