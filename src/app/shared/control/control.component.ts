import { Component, ElementRef, inject, ViewEncapsulation } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host :{
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent {
  @Input({required:true}) label :string | undefined;

  private el = inject(ElementRef);
  
  onClick() {
    console.log("Clicked!");
    console.log(this.el);

  }
}
