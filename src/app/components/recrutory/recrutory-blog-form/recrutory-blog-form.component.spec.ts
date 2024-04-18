import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecrutoryBlogFormComponent } from './recrutory-blog-form.component';

describe('RecrutoryBlogFormComponent', () => {
  let component: RecrutoryBlogFormComponent;
  let fixture: ComponentFixture<RecrutoryBlogFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecrutoryBlogFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecrutoryBlogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
