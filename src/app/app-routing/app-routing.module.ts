import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentResultComponent } from '../components/student-result/student-result.component';
import { StudentAdmissionComponent } from '../components/student-admission/student-admission.component';

const routes: Routes = [
    {
        path        :   'resultboard',
        pathMatch   :   'full',
        component   :   StudentResultComponent
    } ,
    {
      path : 'admission',
      pathMatch : 'full',
      component : StudentAdmissionComponent
    },
    { path: '',
    redirectTo: '/resultboard',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule],
  providers:  [  ],
  declarations: []
})
export class AppRoutingModule { }
