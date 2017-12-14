import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuovoContrattoSoftwareSelectedComponentComponent } from './nuovo-contratto-software-selected-component.component';

describe('NuovoContrattoSoftwareSelectedComponentComponent', () => {
  let component: NuovoContrattoSoftwareSelectedComponentComponent;
  let fixture: ComponentFixture<NuovoContrattoSoftwareSelectedComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuovoContrattoSoftwareSelectedComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuovoContrattoSoftwareSelectedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
