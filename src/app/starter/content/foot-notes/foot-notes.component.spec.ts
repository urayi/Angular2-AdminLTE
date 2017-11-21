import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootNotesComponent } from './foot-notes.component';

describe('FootNotesComponent', () => {
  let component: FootNotesComponent;
  let fixture: ComponentFixture<FootNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
