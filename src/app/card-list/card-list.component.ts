import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  // any property defined here is accessible in the template
  @Input() cards: Array<any>;
  constructor() { }

  ngOnInit() {
  }

}
