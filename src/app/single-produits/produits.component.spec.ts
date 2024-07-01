import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProduitsComponent } from './single-produits.component';

describe('SingleProduitsComponent', () => {
  let component: SingleProduitsComponent;
  let fixture: ComponentFixture<SingleProduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleProduitsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
