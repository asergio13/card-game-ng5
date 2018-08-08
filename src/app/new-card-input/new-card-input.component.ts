// import members from the Angular Core library
import { Component, EventEmitter, OnInit, Output, HostListener, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { takeWhile, debounceTime, filter } from 'rxjs/operators';

@Component({
  selector: 'app-new-card-input', // property refering to app-new-card-input in template app.component.html
  templateUrl: './new-card-input.component.html',
  styleUrls: ['./new-card-input.component.css'],
  host: {'class': 'col-4'}
})
export class NewCardInputComponent implements OnInit {
  
    // any property defined here is accessible in the template
    @ViewChild('form') public form: NgForm;
    
    @Output() onCardAdd = new EventEmitter<string>();
    
    //HostListener decorator to manage the keypress event
    @HostListener('document:keypress', ['$event'])
    
    // declare void method with parameter of type event
    handleKeyboardEvent(event: KeyboardEvent) {
        // If pressed key is Enter and input text is not empty
//        if (event.code === "Enter" && this.newCard.text.length > 0) {
//            this.addCard(this.newCard.text);
//        }
        if (event.code === "Enter" && this.newCardForm.valid) {
            this.addCard(this.newCardForm.controls['text'].value);
        }
    }
    
    addCard(text) {
        // output the text typed by emitting an event
        this.onCardAdd.emit(text);
        //reset the new card text input
        this.newCardForm.controls['text'].setValue('');
    }
    
    public newCard: any = {text: ''};
  
    newCardForm: FormGroup;
    
    constructor(fb: FormBuilder) {
      this.newCardForm = fb.group({
        'text': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      });
        
//      this.newCardForm.valueChanges.pipe(
//            filter((value) => this.newCardForm.valid),
//          debounceTime(500),
//          takeWhile(() => this.alive)
//        ).subscribe(data => {
//           console.log(data);
//        });
    }
    

    ngOnInit() {}

}
