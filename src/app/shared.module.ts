import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragulaModule, DragulaDirective } from 'ng2-dragula';
import { ProfileService } from './services/';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DragulaModule.forRoot()
  ],
  providers: [ProfileService],
  exports: [
    DragulaDirective
  ]
})
export class SharedModule { }
