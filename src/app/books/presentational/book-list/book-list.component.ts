import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../../../shared/models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  @Input()
  books: Book[] = [];

  @Output()
  bookReadChanged = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  toggleBookRead(book: Book) {
    book.read = !book.read;
    this.bookReadChanged.emit(book);
  }
}
