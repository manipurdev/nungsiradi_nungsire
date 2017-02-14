import { Component, OnInit, OnChanges } from '@angular/core';
import { MdDialog } from '@angular/material';
import { AddMessageComponent } from './add-message/add-message.component';
import { AngularFire, FirebaseListObservable } from 'angularfire2'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'under dev!!';
  messages: FirebaseListObservable<any>;
  likeDisable = false;
  constructor(
    private _dialog: MdDialog,
    private af: AngularFire
  ) {

  }

  ngOnInit() {
    this.messages = this.af.database.list('/people/messages');
    console.log(this.messages);
    // .$ref.on('value', (snapshot) => {
    //   console.log(snapshot.ref.key);
    //   // this.messages.push(snapshot.val());
    // });
  }
  openAddMessageDialog() {
    let diaRef = this._dialog.open(AddMessageComponent);
  }

  like(key: string, value: number) {
    this.messages.update(key, { likecount: value + 1 });
  }
}