import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LigaListComponent } from './liga-list/liga-list.component';
import { LigaDetailComponent } from './liga-detail/liga-detail.component';
import { RouterModule } from '@angular/router';
import { LigaRoutingModule } from './liga-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LigaRoutingModule
  ],
  exports: [LigaListComponent],
  declarations: [LigaListComponent, LigaDetailComponent]
})
export class LigaModule { }
