import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
        
  // any property defined here is accessible in the template
  @Input() card:any;
  constructor() { }

  ngOnInit() {
  }

}
