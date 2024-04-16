import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuriotoryBlogFormComponent } from './curiotory-blog-form.component';

describe('CuriotoryBlogFormComponent', () => {
  let component: CuriotoryBlogFormComponent;
  let fixture: ComponentFixture<CuriotoryBlogFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CuriotoryBlogFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CuriotoryBlogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
