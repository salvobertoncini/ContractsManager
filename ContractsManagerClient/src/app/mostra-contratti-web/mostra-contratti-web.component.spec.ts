import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostraContrattiWebComponent } from './mostra-contratti-web.component';

describe('MostraContrattiWebComponent', () => {
  let component: MostraContrattiWebComponent;
  let fixture: ComponentFixture<MostraContrattiWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostraContrattiWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostraContrattiWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
