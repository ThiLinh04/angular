import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructuralDirectivesComponent } from './structural-directives.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [StructuralDirectivesComponent, CardComponent],
  imports: [CommonModule],
  exports: [StructuralDirectivesComponent],
})
export class StructuralDirectivesModule {}
