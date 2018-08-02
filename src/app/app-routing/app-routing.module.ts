import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentResultComponent } from '../components/student-result/student-result.component';
import { StudentAdmissionComponent } from '../components/student-admission/student-admission.component';
import { StudentResultResolverService } from '../resolvers/student-result.resolver.service';

const routes: Routes = [
    {
        path        :   'resultboard',
        pathMatch   :   'full',
        component   :   StudentResultComponent,
        resolve     :   { results : StudentResultResolverService}
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
  providers:  [StudentResultResolverService],
  declarations: []
})
export class AppRoutingModule { }
