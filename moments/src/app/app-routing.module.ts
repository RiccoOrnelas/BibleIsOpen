import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import path from 'path';
import { NewMomentsComponent } from './components/new-moments/new-moments.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  { path: 'newMoment', component: NewMomentsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
