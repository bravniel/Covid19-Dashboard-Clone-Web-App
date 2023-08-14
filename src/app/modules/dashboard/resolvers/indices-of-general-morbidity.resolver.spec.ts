import { TestBed } from '@angular/core/testing';

import { IndicesOfGeneralMorbidityResolver } from './indices-of-general-morbidity.resolver';

describe('IndicesOfGeneralMorbidityResolver', () => {
  let resolver: IndicesOfGeneralMorbidityResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(IndicesOfGeneralMorbidityResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
