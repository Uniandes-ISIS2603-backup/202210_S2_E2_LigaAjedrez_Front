import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartidaDetailComponent } from './partida-detail/partida-detail.component';
import { PartidaListComponent } from './partida-list/partida-list.component';

const routes: Routes = [{
  path: 'partidas',
  children: [
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
