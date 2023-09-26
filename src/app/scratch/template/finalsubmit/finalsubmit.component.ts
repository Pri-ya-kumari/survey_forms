import { Component } from '@angular/core';

@Component({
  selector: 'app-finalsubmit',
  templateUrl: './finalsubmit.component.html',
  styleUrls: ['./finalsubmit.component.css']
})
export class FinalsubmitComponent {


  sheet(){
    document.location = "https://docs.google.com/spreadsheets/d/1F5_TtESFPl0bDorDx4KaVKzVZFtCNVz_c3SMJBUCNqY/edit?usp=sharing"
  }
}
