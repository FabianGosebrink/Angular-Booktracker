import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookService } from '../../../core/services/book.service';
import { Book } from '../../../shared/models/book';

@Component({
  selector: 'app-books-overview',
  templateUrl: './books-overview.component.html',
  styleUrls: ['./books-overview.component.css'],
})
export class BooksOverviewComponent implements OnInit {
  books$: Observable<Book[]>;

  constructor(private readonly bookService: BookService) {}

  ngOnInit() {
    this.books$ = this.bookService.getAllBooks();
  }
}
