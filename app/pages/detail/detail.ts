import {Page, NavParams, NavController} from 'ionic-framework/ionic';
import {Injectable} from 'angular2/core'
import {Data} from '../../providers/data/data'
@Injectable()
@Page({
  templateUrl: 'build/pages/detail/detail.html',
})
export class DetailPage {
  todo;
  constructor(
    public params: NavParams,
    public data: Data,
    public nav: NavController
    ) {
    this.todo = this.params.get('todo')
    if (this.params.get('todo')) {
      this.name = this.todo.name
    }
  }

  pushTodo() {
    this.data.push({
      name: this.name,
      completed: false
    })
    this.nav.pop();
  }
}
