import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


export class Message{
  constructor(public auther:string,public content:string){}
}

@Injectable({
  providedIn: 'root'
})
export class ChatbotsService {


  constructor() { }
  conversation = new Subject<Message[]>();
  messagemap:any={
    "hello":"hi",
    "hi":"hello",
    "how are you":"i am fine You",
    "who are you":"i am a chatbot. Who are you",
    "default":"can't find the answer"
  }

  getbotanswer(msg:any){
    const userMessage = new Message('user',msg);
    this.conversation.next([userMessage]);
    const botMessage = new Message('bot',this.getbotmessage(msg));
    setTimeout(()=>{
      this.conversation.next([botMessage]);
    },1500)
  }
  getbotmessage(question:any){
    let answer = this.messagemap[question];
    return answer || this.messagemap['default'];
  }}
