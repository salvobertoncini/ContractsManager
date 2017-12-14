import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuovoContrattoSoftwareComponent } from './nuovo-contratto-software.component';

describe('NuovoContrattoSoftwareComponent', () => {
  let component: NuovoContrattoSoftwareComponent;
  let fixture: ComponentFixture<NuovoContrattoSoftwareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuovoContrattoSoftwareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuovoContrattoSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
