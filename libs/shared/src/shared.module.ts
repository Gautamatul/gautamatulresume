import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressBarModule } from '@angular/material';

import { PanelSectionHeaderComponent } from './layout/panel-section-header/panel-section-header.component';
import { PanelSectionContentComponent } from './layout/panel-section-content/panel-section-content.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { BodySectionHeaderComponent } from './layout/body-section-header/body-section-header.component';
import { ContentHeaderComponent } from './layout/content-header/content-header.component';
import { TechnologiesUsedComponent } from './technologies-used/technologies-used.component';

const components = [
  PanelSectionHeaderComponent,
  PanelSectionContentComponent,
  ProgressBarComponent,
  BodySectionHeaderComponent,
  ContentHeaderComponent,
  TechnologiesUsedComponent
]

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatProgressBarModule
  ],
  declarations: [... components],
  exports: [... components]
})
export class SharedModule { }