/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AperturaListComponent } from './apertura-list.component';

describe('AperturaListComponent', () => {
  let component: AperturaListComponent;
  let fixture: ComponentFixture<AperturaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AperturaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AperturaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
