import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecrutoryNewDashboardComponent } from './recrutory-new-dashboard.component';

describe('RecrutoryNewDashboardComponent', () => {
  let component: RecrutoryNewDashboardComponent;
  let fixture: ComponentFixture<RecrutoryNewDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecrutoryNewDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecrutoryNewDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
