import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutComponent } from './layout/layout.component';

const components = [
  LayoutComponent  
]

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  declarations: [... components],
  exports: [... components]
})
export class CoreModule { }