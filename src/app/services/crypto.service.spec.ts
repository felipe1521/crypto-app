import { TestBed } from '@angular/core/testing';

import { CryptoService } from './crypto.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('CryptoService', () => {
  let service: CryptoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClient,
        HttpHandler
      ],
    });
    service = TestBed.inject(CryptoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
