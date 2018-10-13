import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Book } from '../../shared/models/book';
import { HttpBaseService } from './http-base.service';

@Injectable({ providedIn: 'root' })
export class BookService {
  constructor(private readonly httpBase: HttpBaseService) {}

  getAllBooks() {
    const books: Book[] = [
      {
        id: 1,
        author: 'Daniel Defoe',
        title: 'Robinson Crusoe',
        read: false,
        description: 'The first English novel',
        genre: 'Novel',
      },
      {
        id: 2,
        author: 'Alexandre Dumas ',
        title: 'The Count of Monte Cristo',
        read: false,
        description:
          'A revenge thriller also set in France after Bonaparte: a masterpiece of adventure writing.',
        genre: 'Novel',
      },
    ];

    return of(books);
  }
}
