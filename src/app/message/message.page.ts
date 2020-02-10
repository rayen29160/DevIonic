import { Component, OnInit } from '@angular/core';
import {MessageServiceService} from './message-service.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {
public messages: any;

  public Msggroup = new FormGroup({
    txtchat: new FormControl('test1', Validators.compose([Validators.required])),
  });

  constructor(public message: MessageServiceService) { }

  ngOnInit() {
    this.loadMessages();
  }
  sendmessage() {
      console.log(`doSend ${this.Msggroup.value.txtchat}`);
      this.message.doSend(
          this.Msggroup.value.txtchat).then((res) => {
        console.log('result from service login', res);
      }).catch(err => {
        console.log('error from service login', err);
      });
    }
  loadMessages() {
    console.log('load messages');
    this.message.getMessages().then((res) => {
      this.messages = res.messages;
      console.log('result from service get messages', res);
    }).catch(err => {
      console.log('Error from service get messages', err);
    });
  }



}
