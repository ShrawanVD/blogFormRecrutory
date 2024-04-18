import { TestBed } from '@angular/core/testing';

import { CuriotoryService } from './curiotory.service';

describe('CuriotoryService', () => {
  let service: CuriotoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuriotoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
