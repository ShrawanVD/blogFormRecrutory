import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecrutoryDashboardComponent } from './recrutory-dashboard.component';

describe('RecrutoryDashboardComponent', () => {
  let component: RecrutoryDashboardComponent;
  let fixture: ComponentFixture<RecrutoryDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecrutoryDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecrutoryDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
