import { HttpClient, HttpClientModule } from '@angular/common/http';
import { inject, TestBed } from '@angular/core/testing';
import { ImagesDataService } from './images-data.service';

describe('Service: ImagesData', () => {
  let httpClient: HttpClient;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImagesDataService],
      imports: [HttpClientModule],
    });
    httpClient = TestBed.inject(HttpClient);
  });

  it('Unit test for service', inject(
    [ImagesDataService],
    (service: ImagesDataService) => {
      expect(service).toBeTruthy();
    }
  ));
});
