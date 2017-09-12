import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabaseModule,AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  username: string = '';
  message : String = '';
  messages : object[] = [];
  constructor(public db:AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.username = this.navParams.get('username');
    this.db.list('/chat').subscribe(data=>
    {
      // console.log(data);
      // data.map(elem => {
      //   this.messages.push(elem);
      // })
      this.messages = data; 
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

  sendmessage()
  {
    this.db.list('/chat').push({
      username: this.username,
      message:this.message
    }).then(() => {
        ///message is sent
      }).catch(()=>{

      });
  }
  
}
