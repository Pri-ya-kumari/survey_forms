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
    "how are you":"Hello! I'm doing well, thank you for asking.",
    "who are you":"i am a chatbot. Who are you",
    "Hello":"hi",
    "Hi":"hello",
    "How Are You":"Hello! I'm doing well, thank you for asking.",
    "Who Are You":"i am a chatbot. Who are you",
    "How are you":"Hello! I'm doing well, thank you for asking.",
    "Who are you":"i am a chatbot. Who are you",
    "Bye":"Goodbye! If you have more questions in the future, feel free to ask. Have a great day!",
    "GoodBye":"Goodbye! If you have more questions in the future, feel free to ask. Have a great day!",
    "Thank You":"Goodbye! If you have more questions in the future, feel free to ask. Have a great day!",
    "bye":"Goodbye! If you have more questions in the future, feel free to ask. Have a great day!",
    "goodbye":"Goodbye! If you have more questions in the future, feel free to ask. Have a great day!",
    "thank you":"Goodbye! If you have more questions in the future, feel free to ask. Have a great day!",
    "How Can I Create Account":"Click on the Login Button To create Account",
    "how can i create account":"Click on the Login Button To create Account",
    "Can I Create a Account Here":"Click on the Login Button To create Account",
    "can i create a account here":"Click on the Login Button To create Account",
    "How Can I Create A Form Without Login":"No You Can't Create A Form Without Login",
    "how can i create a form without login":"No You Can't Create A Form Without Login",
    "can i create a form after login":"Yes, You Can",
    "Can I Create A Form After Login":"Yes, You Can",
    "default":"can't recognized your text"
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
