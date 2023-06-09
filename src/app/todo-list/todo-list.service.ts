import { Injectable } from '@angular/core';
//class
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

constructor() { }

//宣告私有的變數 list ，用來存放所有的代辦事項
private list: Todo[] = [];


//1.取得待辦事項清單
// list 是私有變數，需要再新增一個函式來取得存放在 list 裡的資料
  getList(): Todo[] {
    return this.list;
  }

//2.新增待辦事項
//將使用者所輸入的待辦事項存放到 list 裡的函式
  add(title: string): void {

  // 避免傳入的 title 是無效值或空白字串，稍微判斷一下
  if (title || title.trim()) {
    this.list.push(new Todo(title));
    }

  }
//3.移除待辦事項
  remove(index: number): void {
    this.list.splice(index, 1);
  }

//4.取得已完成/未完成的清單
  getWithCompleted(completed: boolean): Todo[] {
    return this.list.filter(todo => todo.done === completed);
  }

//5.從清單中移除所有已完成之待辦事項
  removeCompleted(): void {
    this.list = this.getWithCompleted(false);
  }

}
