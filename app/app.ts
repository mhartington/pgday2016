import {App, Platform, Config} from 'ionic-framework/ionic';
import {HomePage} from './pages/home/home';
import {Data} from './providers/data/data';
@App({
  template: `
    <ion-nav [root]="root"></ion-nav>
  `,
  // Check out the config API docs for more info
  // http://ionicframework.com/docs/v2/api/config/Config/
  config: {},
  providers: [Data]

})
export class MyApp {
  constructor(platform: Platform) {
    this.platform = platform;
    this.initializeApp();
    this.root = HomePage;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      console.log('Platform ready');
    });
  }
}
