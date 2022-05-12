/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JugadaListComponent } from './jugada-list.component';

describe('JugadaListComponent', () => {
  let component: JugadaListComponent;
  let fixture: ComponentFixture<JugadaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JugadaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JugadaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
