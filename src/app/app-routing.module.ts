import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DragComponent} from "./pages/drag/drag.component";

const routes: Routes = [
  { path: '',                 pathMatch: 'full',                redirectTo: 'drag'},
  { path: 'drag',             component: DragComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
