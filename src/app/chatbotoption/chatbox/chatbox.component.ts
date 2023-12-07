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
    const welcomeMessage: Message = { auther: 'bot', content: 'Hi' };
    this.messages.push(welcomeMessage);
    
    const welcom2: Message = { auther: 'bot', content: 'I am a chatbot.' };
    this.messages.push(welcom2);
    
    const welcom3: Message = { auther: 'bot', content: 'How can I help you?' };
    this.messages.push(welcom3);

    this.chatboxs.conversation.subscribe((val)=>{
      this.messages = this.messages.concat(val);      
    })
  }

  sendmessage(){
    this.chatboxs.getbotanswer(this.value);
    this.value = '';
  }

}
