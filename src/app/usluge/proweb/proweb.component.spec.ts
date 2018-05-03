import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProwebComponent } from './proweb.component';

describe('ProwebComponent', () => {
  let component: ProwebComponent;
  let fixture: ComponentFixture<ProwebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProwebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProwebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
