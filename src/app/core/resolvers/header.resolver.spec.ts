import { TestBed } from '@angular/core/testing';

import { HeaderResolver } from './header.resolver';

describe('HeaderResolver', () => {
  let resolver: HeaderResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(HeaderResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
