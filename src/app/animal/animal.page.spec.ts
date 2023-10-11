import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AnimalPage } from './animal.page';

describe('AnimalPage', () => {
  let component: AnimalPage;
  let fixture: ComponentFixture<AnimalPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(AnimalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
