
//待辦事項的資料物件模型
export class Todo {
  //事項名稱 先給預設值
  private title = '';

  //完成與否
  private completed = false;


  constructor(title: string) {
  this.title = title || ''; // 為避免傳入的值為 Falsy 值，稍作處理
  }

  //此事項是否已經完成
  get done(): boolean {
    return this.completed;
  }
  //get 是一種宣告，表示done()是一個 getter ，這種函式在使用時，不用像一般函式那樣需要加上 () 才能執行。
  //例如:console.log(this.done); 不用加()可執行

  //取得事項名稱
  getTitle():string{
    return this.title;
  }

  //來回切換完成狀態
  toggleCompletion(): void {
    this.completed = !this.completed;
  }

  //是否處於編輯模式
  private editMode = false;

  //取得此事項是否處於編輯模式
  get editing(): boolean {
    return this.editMode;
  }
  //設定此事項是否可被編輯
  set editable(bl: boolean) {
    this.editMode = bl;
  }
  //更新待辦事項的名稱
  setTitle(title: string): void {
    this.title = title;
  }
  //設定是否完成
  setCompleted(completed: boolean): void {
    this.completed = completed;
  }


}
