import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BookService } from '../../../core/services/book.service';
import { Book } from '../../../shared/models/book';

@Component({
  selector: 'app-books-overview',
  templateUrl: './books-overview.component.html',
  styleUrls: ['./books-overview.component.css']
})
export class BooksOverviewComponent implements OnInit {
  unreadBooks$: Observable<Book[]>;
  readBooks$: Observable<Book[]>;

  constructor(private readonly bookService: BookService) {}

  ngOnInit() {
    this.getAllBooks();
  }

  markAsRead(book: Book) {
    book.read = true;
    this.bookService.update(book);
    this.getAllBooks();
  }

  private getAllBooks() {
    const observable = this.bookService.getAllBooks();

    this.unreadBooks$ = observable.pipe(
      map(books => books.filter(book => !book.read))
    );

    this.readBooks$ = observable.pipe(
      map(books => books.filter(book => book.read))
    );
  }
}
