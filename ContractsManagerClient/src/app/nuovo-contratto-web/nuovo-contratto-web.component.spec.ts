import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuovoContrattoWebComponent } from './nuovo-contratto-web.component';

describe('NuovoContrattoWebComponent', () => {
  let component: NuovoContrattoWebComponent;
  let fixture: ComponentFixture<NuovoContrattoWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuovoContrattoWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuovoContrattoWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
