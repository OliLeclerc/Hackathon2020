import { TestBed } from '@angular/core/testing';

import { ImageDecoratorService } from './image-decorator.service';

describe('ImageDecoratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImageDecoratorService = TestBed.get(ImageDecoratorService);
    expect(service).toBeTruthy();
  });
});
