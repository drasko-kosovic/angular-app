import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import {NavbarComponent} from './layouts/navbar/navbar.component';


const routes: Routes = [
  {
    path: 'student',
    loadChildren: () => import('./entites/student/student.module').then(m => m.StudentModule),
  },
  {
    path:'home',
    component:HomeComponent
  },
  {path: '',
  component: NavbarComponent,
  outlet: 'navbar'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
