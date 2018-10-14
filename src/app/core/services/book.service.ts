import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Book } from '../../shared/models/book';
import { HttpBaseService } from './http-base.service';

@Injectable({ providedIn: 'root' })
export class BookService {
  books: Book[] = [
    {
      id: 1,
      author: 'Daniel Defoe',
      title: 'Robinson Crusoe',
      read: false,
      description: 'The first English novel',
      genre: 'Novel'
    },
    {
      id: 2,
      author: 'Alexandre Dumas ',
      title: 'The Count of Monte Cristo',
      read: false,
      description:
        'A revenge thriller also set in France after Bonaparte: a masterpiece of adventure writing.',
      genre: 'Novel'
    }
  ];

  constructor(private readonly httpBase: HttpBaseService) {}

  getAllBooks() {
    console.log('getAllBooks');
    return of(this.books);
  }

  update(updated: Book) {
    const existing = this.books.find(x => x.id === updated.id);
    const index = this.books.indexOf(existing);
    this.books.splice(index, 1, updated);

    return of([this.books]);
  }

  add(book: Book) {
    const maxId = Math.max(...this.books.map(o => o.id), 0);
    book.id = maxId + 1;
    this.books.push(book);
    return of([this.books]);
  }
}
