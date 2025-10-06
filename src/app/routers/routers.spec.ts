import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Routers } from './routers';

describe('Routers', () => {
  let component: Routers;
  let fixture: ComponentFixture<Routers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Routers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Routers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
