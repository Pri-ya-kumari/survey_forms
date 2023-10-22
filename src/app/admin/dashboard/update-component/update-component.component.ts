import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-component',
  templateUrl: './update-component.component.html',
  styleUrls: ['./update-component.component.css']
})
export class UpdateComponentComponent implements OnInit {

  Id=0;
  constructor(private route:ActivatedRoute){

  }
  ngOnInit(): void {
    this.Id = this.route.snapshot.params['id'];
    alert(this.Id);
  }
}
