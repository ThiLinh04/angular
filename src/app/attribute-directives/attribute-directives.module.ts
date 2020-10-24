import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributeDirectivesComponent } from './attribute-directives.component';
import { HightlightDirective } from './hightlight.directive';



@NgModule({
  declarations: [AttributeDirectivesComponent, HightlightDirective],
  imports: [
    CommonModule
  ],
  exports: [AttributeDirectivesComponent]
})
export class AttributeDirectivesModule { }
