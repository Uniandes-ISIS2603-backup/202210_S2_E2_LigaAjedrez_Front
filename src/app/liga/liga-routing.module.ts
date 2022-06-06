import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LigaDetailComponent } from './liga-detail/liga-detail.component';
import { LigaListComponent } from './liga-list/liga-list.component';

const routes: Routes = [{
  path: 'ligas',
  children: [
    {
      path: 'list',
      component: LigaListComponent
    },
    {
      path: ':id',
      component: LigaDetailComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LigaRoutingModule { }
