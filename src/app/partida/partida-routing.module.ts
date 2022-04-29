import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartidaCreateComponent } from './partida-create/partida-create.component';
import { PartidaDetailComponent } from './partida-detail/partida-detail.component';
import { PartidaListComponent } from './partida-list/partida-list.component';

const routes: Routes = [{
  path: 'books',
  children: [
    {
      path: 'create',
      component: PartidaCreateComponent
    },
    {
      path: 'list',
      component: PartidaListComponent
    },
    {
      path: ':id',
      component: PartidaDetailComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartidaRoutingModule { }
