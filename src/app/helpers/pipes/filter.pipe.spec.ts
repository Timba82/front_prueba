import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { FilterPipe } from './filter.pipe';

describe('Pipe: Filtere', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterPipe],
      imports: [HttpClientModule],
    }).compileComponents();
  });

  it('create an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('filterPipe return an image element array', () => {
    const images = [
      {
        id: 1,
        photo: 'https://i.picsum.photos/id/1/500/500',
        text: 'laborum exercitation velit nisi',
      },
      {
        id: 2,
        photo: 'https://i.picsum.photos/id/2/500/500',
        text: 'deserunt cupidatat deserunt cupidatat',
      },
    ];
    const filterPipe = new FilterPipe();
    const result = filterPipe.transform(images, 'deserunt', 'text');
    expect(result).toEqual([images[1]]);
  });
});
