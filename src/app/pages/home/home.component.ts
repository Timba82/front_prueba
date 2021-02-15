import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Images } from 'src/app/interfaces/images/images.model';
import { ImagesDataService } from 'src/app/services/images/images-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public images: Images[] = [];
  public notFoundMessage = 'No hay imagenes que coincidan con el filtro introducido';
  public virtualScrollItemSize = 20;
  private getImagesServiceSub: Subscription;
  filterInput = new FormControl();

  constructor(private imagesService: ImagesDataService) {}

  ngOnInit(): void {
    this.fetchImages();
  }

  ngOnDestroy(): void {
    this.getImagesServiceSub.unsubscribe();
  }

  fetchImages(): void {
    this.getImagesServiceSub = this.imagesService.getImagesService().subscribe(
      (data) => {
        this.images = data;
      },
      (err) => console.log('HTTP Error', err),
      () => console.log('HTTP request completed')
    );
  }
}
