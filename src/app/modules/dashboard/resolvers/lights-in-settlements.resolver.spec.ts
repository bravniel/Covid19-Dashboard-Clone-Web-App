import { TestBed } from '@angular/core/testing';

import { LightsInSettlementsResolver } from './lights-in-settlements.resolver';

describe('LightsInSettlementsResolver', () => {
  let resolver: LightsInSettlementsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(LightsInSettlementsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
