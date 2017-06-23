import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from "./components/about/about.component";

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

// @NgModule({
//   imports: [RouterModule.forChild(ROUTES)],
//   exports: [RouterModule],
// })
// export class NameRoutingModule { }

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);