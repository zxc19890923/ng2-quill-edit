1、安装

npm install ng2-quill-editor --save
2、主模块中引入

import { QuillEditorModule } from 'ng2-quill-editor';

@NgModule({
  // ...
  imports: [
    QuillEditorModule
  ],
  // ...
})
export class AppModule {}
3、组件中使用

A: 模板中（html）

// ngModel 双休数据绑定，获取富文本框中的数据
// config 配置对象
// 改变输入框的值，触发事件
<quill-editor [(ngModel)]="editorContent"
              [config]="editorConfig"
              (change)="onContentChanged($event)"></quill-editor>
              
B: 组件中

import { Component } from '@angular/core';

@Component({
  selector: "",
  templateUrl: ""
})
export class Sample{
  // 初始化值
  public editorContent = "";
  // 配置编辑器提醒文字
  public editorConfig = {
    placeholder: "输入公告内容，支持html"
  };
  constructor() {}
  // 触发事件 html标记语言， text文本
  onContentChanged({ html, text }) {
    console.log(html, text);
  }
}
4、 界面中使用html标记语言注意事项

remark是含有标记语言的文本，所以使用下面的格式插入的html界面中

<div innerHTML="{{remark}}"></div>
