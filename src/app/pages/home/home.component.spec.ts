import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  async,
  ComponentFixture,
  inject,
  TestBed
} from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { throwError } from 'rxjs';
import { FilterPipe } from 'src/app/helpers/pipes/filter.pipe';
import { ImagesDataService } from 'src/app/services/images/images-data.service';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let httpClient: HttpClient;
  let service;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, FilterPipe],
      imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
        ScrollingModule,
      ],
    }).compileComponents();
    httpClient = TestBed.inject(HttpClient);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(inject([ImagesDataService], (s) => {
    service = s;
  }));

  it('Create HomeComponent', () => {
    expect(component).toBeTruthy();
  });

  it('Spy getImagesService Error', () => {
    const mockCallService = spyOn(service, 'getImagesService').and.returnValue(
      throwError(new Error())
    );
    component.fetchImages();
    expect(component).toBeTruthy();
  });
});
