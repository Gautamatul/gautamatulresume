import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SharedModule } from '../../shared/src/shared.module';

import { SkillsComponent } from './skills/skills.component';
import { BodyHeaderComponent } from './body-header/body-header.component';
import { PanelHeaderComponent } from './panel-header/panel-header.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { SoftwareComponent } from './software/software.component';
import { LanguagesComponent } from './languages/languages.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component'; 
import { HobbiesInterestsComponent } from './hobbies-interests/hobbies-interests.component'; 

const components = [
  SkillsComponent,
  BodyHeaderComponent,
  PanelHeaderComponent,
  PersonalInfoComponent,
  SoftwareComponent,
  LanguagesComponent,
  ExperienceComponent,
  EducationComponent,
  HobbiesInterestsComponent
];

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,

    SharedModule
  ],
  declarations: [... components],
  exports: [... components]
})
export class ResumeModule { }