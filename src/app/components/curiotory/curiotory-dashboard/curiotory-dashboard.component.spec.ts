import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuriotoryDashboardComponent } from './curiotory-dashboard.component';

describe('CuriotoryDashboardComponent', () => {
  let component: CuriotoryDashboardComponent;
  let fixture: ComponentFixture<CuriotoryDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CuriotoryDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CuriotoryDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
