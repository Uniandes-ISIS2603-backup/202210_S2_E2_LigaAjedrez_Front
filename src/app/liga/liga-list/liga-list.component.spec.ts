/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LigaListComponent } from './liga-list.component';

describe('LigaListComponent', () => {
  let component: LigaListComponent;
  let fixture: ComponentFixture<LigaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LigaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LigaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
