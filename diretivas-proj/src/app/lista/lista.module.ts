import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { ListViewComponent } from './list-view/list-view.component';



@NgModule({
  declarations: [
    FormComponent,
    ListViewComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FormComponent
  ]
})
export class ListaModule { }
