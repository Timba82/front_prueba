import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FilterPipe } from './helpers/pipes/filter.pipe';
import { HomeComponent } from './pages/home/home.component';

describe('AppComponent', () => {
  let httpClient: HttpClient;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, HomeComponent, FilterPipe],
      imports: [HttpClientModule],
    }).compileComponents();
    httpClient = TestBed.inject(HttpClient);
  });

  it('Create AppComponent', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
