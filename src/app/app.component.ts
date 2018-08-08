// import Component from the Angular Core library
import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // property refering to app-root in index.html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // any property defined here is accessible in the template
  // Title of the app
  title = 'Game of Cards';
  
  // Array of cards declared
  public cards: Array<any> = [
    {text: 'Card 1'},
    {text: 'Card 2'},
    {text: 'Card 3'},
    {text: 'Card 4'},
    {text: 'Card 5'},
    {text: 'Card 6'},
    {text: 'Card 7'},
    {text: 'Card 8'},
    {text: 'Card 9'},
    {text: 'Card 10'},
  ];
  
  addNewCard(cardText: string) {
     this.cards.push({text: cardText});
  }
  
  constructor() { }

  ngOnInit() {}
}
