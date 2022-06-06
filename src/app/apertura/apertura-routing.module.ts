import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AperturaDetailComponent } from './apertura-detail/apertura-detail.component';
import { AperturaListComponent } from './apertura-list/apertura-list.component';

const routes: Routes = [{
 path: 'aperturas',
 children: [
   {
     path: 'list',
     component: AperturaListComponent
   },
   {
     path: ':id',
     component: AperturaDetailComponent
   },
 ]
}];

@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class AperturaRoutingModule { }
