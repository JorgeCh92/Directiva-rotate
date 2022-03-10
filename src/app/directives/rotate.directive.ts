import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appRotate]'
})
export class RotateDirective {

  @Input('appRotate')
  rotate: any;

  @Input()
  step: any;

  private actualRotationAngle= 0;
  private initialRotation= true;
  
  constructor(private element: ElementRef) { 
  }

  @HostListener('mousedown', ['$event'])
    onMousedown( e: MouseEvent ) {
        if(e.button == 0 && e.shiftKey)
        {
          if(this.initialRotation)
          {
            this.initialRotation= false;
            this.actualRotationAngle= this.actualRotationAngle - Number(this.rotate);
            var arg = "rotate("+ this.actualRotationAngle + "deg)";
            this.element.nativeElement.style.transform = arg;
          }
          else
          {
            this.actualRotationAngle= this.actualRotationAngle - Number(this.step);
            var arg = "rotate("+ this.actualRotationAngle + "deg)";
            this.element.nativeElement.style.transform = arg;
          }
        }
        else
        {
          if(this.initialRotation)
          {
            this.initialRotation= false;
            this.actualRotationAngle= this.actualRotationAngle + Number(this.rotate);
            var arg = "rotate("+ this.actualRotationAngle + "deg)";
            this.element.nativeElement.style.transform = arg;
          }
          else
          {
            this.actualRotationAngle= this.actualRotationAngle + Number(this.step);
            var arg = "rotate("+ this.actualRotationAngle + "deg)";
            this.element.nativeElement.style.transform = arg;
          }
        }
    }
}
