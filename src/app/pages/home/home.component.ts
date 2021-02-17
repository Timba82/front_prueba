import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FilterPipe } from 'src/app/helpers/pipes/filter.pipe';
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
  public showNotFoundMessage = false;
  public filterInput = new FormControl();
  private getImagesServiceSub: Subscription;
  private filter = new FilterPipe();

  constructor(private imagesService: ImagesDataService) {}

  ngOnInit(): void {
    this.fetchImages();
  }

  ngOnDestroy(): void {
    this.getImagesServiceSub.unsubscribe();
  }

  private fetchImages(): void {
    this.getImagesServiceSub = this.imagesService.getImagesService().subscribe(
      (res) => {
        this.images = res;
      },
      (err) => console.log('HTTP Error', err),
      () => console.log('HTTP request completed')
    );
  }

  filterInputChange(): void {
    const result: Images[] = this.filter.transform(this.images, this.filterInput.value, 'text', 'id');
    this.showNotFoundMessage = (result.length === 0);
  }
}
