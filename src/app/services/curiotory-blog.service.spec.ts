import { TestBed } from '@angular/core/testing';

import { CuriotoryBlogService } from './curiotory-blog.service';

describe('CuriotoryBlogService', () => {
  let service: CuriotoryBlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuriotoryBlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
