import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../../shared/models/book';
import { HttpBaseService } from './http-base.service';

@Injectable({ providedIn: 'root' })
export class BookService {
  constructor(
    private readonly httpBase: HttpBaseService,
    private http: HttpClient
  ) {}

  getAllBooks() {
    return this.httpBase.get<Book[]>(`https://localhost:44378/api/books`);
  }

  getSingle(bookId: number) {
    return this.httpBase.get<Book>(
      `https://localhost:44378/api/books/${bookId}`
    );
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
    return this.http.put<Book>(
      `https://localhost:44378/api/books/${updated.id}`,
      updated
    );
  }

  add(book: Book) {
    return this.httpBase.post(`https://localhost:44378/api/books`, book);
  }
}
