import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdnimalComponent } from './add-adnimal.component';

describe('AddAdnimalComponent', () => {
  let component: AddAdnimalComponent;
  let fixture: ComponentFixture<AddAdnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdnimalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAdnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
