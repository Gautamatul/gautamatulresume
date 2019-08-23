import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NxModule } from '@nrwl/nx';

import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ResumeModule } from '../../../../libs/resume/src/resume.module';
import { CoreModule } from '../../../../libs/core/src/core.module';
import { SharedModule } from '../../../../libs/shared/src/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    FormsModule,
    FlexLayoutModule,

    CoreModule,
    ResumeModule,
    SharedModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
