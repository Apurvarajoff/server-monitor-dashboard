import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, viewChild } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";
import {FormsModule } from "@angular/forms"

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent,FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit,AfterViewInit {
  //@ViewChild is used to catch (grab) a template reference variable 
  // from the template into the component class.
  //We can use @ViewChild to catch either:
  // ✅ A template reference variable
  // ✅ A child component
  // ✅ A directive
  enteredTitle ='';
  enteredText='';

  @ViewChild('form') private form? : ElementRef<HTMLFormElement>;

  @Output() add = new EventEmitter<{title:string ;text:string}>();

  ngOnInit(): void {
      console.log("ONINIT");
      console.log(this.form?.nativeElement);
  }

  ngAfterViewInit(): void {
      console.log("AfterViewInit");
      console.log(this.form?.nativeElement);

  }
  onSubmit(){

    console.log("Title : ",this.enteredTitle);
    console.log("Text : ",this.enteredText);

    this.add.emit({title :this.enteredTitle ,text :this.enteredText});
    this.enteredTitle='';
    this.enteredText='';
  }
}
