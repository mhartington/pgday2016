import {Injectable} from 'angular2/core';
@Injectable()
export class Data {
  todos = [
    {
      name: 'learn es6',
      completed: false
    },
    {
      name: 'learn angular2',
      completed: false
    },
    {
      name: 'learn ionic2',
      completed: false
    }

  ]
  constructor() {}
  all() {
    return this.todos
  }
  push(todo){
      this.todos.push(todo)
  }
}
