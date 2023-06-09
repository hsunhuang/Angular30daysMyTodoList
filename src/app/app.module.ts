import { TodoListModule } from './todo-list/todo-list.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TodoListModule
  ],
  exports:[TodoListComponent], //exports可被其他的 Module 使用
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
