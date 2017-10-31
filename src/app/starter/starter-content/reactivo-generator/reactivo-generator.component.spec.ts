import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivoGeneratorComponent } from './reactivo-generator.component';

describe('ReactivoGeneratorComponent', () => {
  let component: ReactivoGeneratorComponent;
  let fixture: ComponentFixture<ReactivoGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactivoGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactivoGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
