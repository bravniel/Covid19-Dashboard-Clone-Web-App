import { TestBed } from '@angular/core/testing';

import { ViewOnResolver } from './view-on.resolver';

describe('ViewOnResolver', () => {
  let resolver: ViewOnResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ViewOnResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
