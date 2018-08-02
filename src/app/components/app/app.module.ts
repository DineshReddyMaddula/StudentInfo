import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentResultComponent } from '../student-result/student-result.component';
import { StudentAdmissionComponent } from '../student-admission/student-admission.component';
import { StudentResultService } from '../../services/student-result.service';
import { YearValidator } from '../student-admission/year-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    StudentResultComponent,
    StudentAdmissionComponent,
    YearValidator
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [StudentResultService],
  bootstrap: [AppComponent]
})
export class AppModule { }
