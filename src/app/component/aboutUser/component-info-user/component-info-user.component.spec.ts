import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentInfoUserComponent } from './component-info-user.component';

describe('ComponentInfoUserComponent', () => {
  let component: ComponentInfoUserComponent;
  let fixture: ComponentFixture<ComponentInfoUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentInfoUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentInfoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
