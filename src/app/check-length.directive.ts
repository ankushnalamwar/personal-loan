import { Directive, ElementRef, Renderer2, DoCheck, OnInit } from '@angular/core';

@Directive({
  selector: '[appCheckLength]'
})
export class CheckLengthDirective  implements OnInit{

  constructor(private el: ElementRef, private rendorer: Renderer2) { }

  ngOnInit(){
    
  }


    
}
