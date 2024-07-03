import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import path from 'path';
import { EditDevotionalComponent } from './components/edit-devotional/edit-devotional.component';
import { NewMomentsComponent } from './components/new-moments/new-moments.component';
import { DevotionalPageComponent } from './components/devotional-page/devotional-page.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  { path: 'newMoment', component: NewMomentsComponent },
  { path: 'devotional/:id', component: DevotionalPageComponent },
  { path: 'devotional/edit/:id', component: EditDevotionalComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
