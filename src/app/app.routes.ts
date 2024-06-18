import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';
import { Section4Component } from './section4/section4.component';

const routes: Routes = [
  { path: 'inicio', component: Section1Component },
  { path: 'sobre-nos', component: Section2Component },
  { path: 'nossos-projetos', component: Section3Component },
  { path: 'contato', component: Section4Component },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
