import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {
  textInput = "";
  todos = []

  constructor() { }

  ngOnInit() { }

  itemCreator() {
    const input = this.textInput;
    this.todos.push(input);
    this.textInput = '';
  }
  itemDelete(item) {
    const indexOfItem = this.todos.indexOf(item);
    this.todos.splice(indexOfItem, 1);
  }
}