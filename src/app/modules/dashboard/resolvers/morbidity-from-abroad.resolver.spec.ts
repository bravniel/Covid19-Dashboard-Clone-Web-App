import { TestBed } from '@angular/core/testing';

import { MorbidityFromAbroadResolver } from './morbidity-from-abroad.resolver';

describe('MorbidityFromAbroadResolver', () => {
  let resolver: MorbidityFromAbroadResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(MorbidityFromAbroadResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
