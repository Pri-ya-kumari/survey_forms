import { Component } from '@angular/core';
import { ChatbotsService, Message } from 'src/app/service/chatbots.service';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent {
  messages : Message[]=[];
  value :string|undefined;

  constructor(public chatboxs:ChatbotsService){}

  ngOnInit(): void {
    const welcomeMessage: Message = { auther: 'bot', content: 'Hi! I am a chatbot. How can I help you?' };
    this.messages.push(welcomeMessage);

    this.chatboxs.conversation.subscribe((val)=>{
      this.messages = this.messages.concat(val);      
    })
  }

  sendmessage(){
    this.chatboxs.getbotanswer(this.value);
    this.value = '';
  }

}
