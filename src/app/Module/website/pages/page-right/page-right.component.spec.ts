/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PageRightComponent } from './page-right.component';

describe('PageRightComponent', () => {
  let component: PageRightComponent;
  let fixture: ComponentFixture<PageRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
