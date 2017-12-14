import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuovoContrattoWebSelectedComponentComponent } from './nuovo-contratto-web-selected-component.component';

describe('NuovoContrattoWebSelectedComponentComponent', () => {
  let component: NuovoContrattoWebSelectedComponentComponent;
  let fixture: ComponentFixture<NuovoContrattoWebSelectedComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuovoContrattoWebSelectedComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuovoContrattoWebSelectedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
