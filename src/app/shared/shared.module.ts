import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascaraDirective } from './directives/mascara.directive';
import { PtBrMatPaginatorIntl } from './';
import { TipoPipe } from './pipes/tipo.pipe';
import { DataPipe } from './pipes/data.pipe';


@NgModule({
  declarations: [
    MascaraDirective,
    TipoPipe,
    DataPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [ 
    // Exports é usado quando
    // é desejado que um componene seja usado globalmente por varias classe
    MascaraDirective,
    TipoPipe,
    DataPipe
  ], 
  providers: [
    PtBrMatPaginatorIntl
  ]
})
export class SharedModule { }
