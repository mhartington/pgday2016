import {Page, NavController} from 'ionic-framework/ionic';
import {Data} from '../../providers/data/data'
import {DetailPage} from '../../pages/detail/detail'

@Page({
  templateUrl: 'build/pages/home/home.html',
})
export class HomePage {
  todos;
  constructor(
    public data: Data,
    public nav: NavController
    ) {
    this.todos = data.all();
  }
  pushDetail(todo) {
    this.nav.push(DetailPage, {
      'todo': todo
    })
  }

  newTodo() {
    this.nav.push(DetailPage)
  }

  complete(slidingItem, todo) {
    todo.completed = !todo.completed
    setTimeout(() => console.log(todo), 200)
    slidingItem.close();
  }
}
