import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetApiExmp } from './get-api-exmp';

describe('GetApiExmp', () => {
  let component: GetApiExmp;
  let fixture: ComponentFixture<GetApiExmp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetApiExmp],
    }).compileComponents();

    fixture = TestBed.createComponent(GetApiExmp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
