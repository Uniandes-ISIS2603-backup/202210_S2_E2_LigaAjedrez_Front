import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LigaListComponent } from './liga-list/liga-list.component';
import { LigaDetailComponent } from './liga-detail/liga-detail.component';

@NgModule({
  imports: [CommonModule],
  exports: [LigaListComponent],
  declarations: [LigaListComponent, LigaDetailComponent]
})
export class LigaModule { }
