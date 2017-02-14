import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MdDialogRef, MdSnackBar } from '@angular/material'
import { AngularFire } from 'angularfire2'
@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.css']
})
export class AddMessageComponent implements OnInit {
  messageForm: FormGroup;
  constructor(
    private _dialogRef: MdDialogRef<AddMessageComponent>,
    private _snack: MdSnackBar,
    private af: AngularFire,
    // private afdb: AngularFireDatabase
  ) {
    this.messageForm = new FormGroup({
      to: new FormControl(),
      from: new FormControl(),
      message: new FormControl(),
      location: new FormControl()
    })
  }
  ngOnInit() {
  }
  submitMessage() {
    console.log("posting message...");
    console.log(this.messageForm.value);
    // this.af.database.object('/people/message').$ref.ref.set(
    //   this.messageForm.value
    // ).then((resolved) => {
    //   this._snack.open('Message added!', 'Dismiss')
    //   this._dialogRef.close();
    // },
    //   (rejected) => {
    //     this._snack.open('Failed to add message! Try again', 'Dismiss')
    //   });
    let formdata = this.messageForm.value;
    formdata['likecount'] = 0;
    formdata['date'] = Date.now();
    this.af.database.object('/people').$ref.ref.child('messages').push()
      .set(
      formdata
      ).then((resolved) => {
        this._snack.open('Message added!', 'Dismiss', { duration: 2000 })
        this._dialogRef.close();
      },
      (rejected) => {
        this._snack.open('Failed to add message! Try again', 'Dismiss', { duration: 3000 })
      });

  }
  testfb() {
    this.af.database.object('/test').$ref.ref.set({
      test1: "value1",
    });
  }
}
