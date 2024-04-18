import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuriotoryNewDashboardComponent } from './curiotory-new-dashboard.component';

describe('CuriotoryNewDashboardComponent', () => {
  let component: CuriotoryNewDashboardComponent;
  let fixture: ComponentFixture<CuriotoryNewDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CuriotoryNewDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CuriotoryNewDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
