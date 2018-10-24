import { Injectable } from '@angular/core';
import { Book } from '../../shared/models/book';
import { HttpBaseService } from './http-base.service';

@Injectable({ providedIn: 'root' })
export class BookService {
  private url = `https://localhost:5001/api/books`;
  constructor(private readonly httpBase: HttpBaseService) {}

  getAllBooks() {
    return this.httpBase.get<Book[]>(this.url);
  }

  getSingle(bookId: number) {
    return this.httpBase.get<Book>(`${this.url}/${bookId}`);
  }

  getAllGenres() {
    return [
      { value: 'Tragedy', displayName: 'Tragedy' },
      { value: 'Tragic comedy', displayName: 'Tragic comedy' },
      { value: 'Fantasy', displayName: 'Fantasy' },
      { value: 'Mythology', displayName: 'Mythology' },
      { value: 'Adventure', displayName: 'Adventure' },
      { value: 'Mystery', displayName: 'Mystery' },
      { value: 'Science Fiction', displayName: 'Science fiction' },
      { value: 'Drama', displayName: 'Drame' },
      { value: 'Romance', displayName: 'Romance' },
      { value: 'Action / Adventure', displayName: 'Action / Adventure' },
      { value: 'Satire', displayName: 'Satire' },
      { value: 'Horror', displayName: 'Horror' },
      { value: 'Novel', displayName: 'Novel' },
    ];
  }

  update(updated: Book) {
    return this.httpBase.put<Book>(`${this.url}/${updated.id}`, updated);
  }

  add(book: Book) {
    return this.httpBase.post(this.url, book);
  }

  delete(bookId: number) {
    return this.httpBase.delete(`${this.url}/${bookId}`);
  }
}
