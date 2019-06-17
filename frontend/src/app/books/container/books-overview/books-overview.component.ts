import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { BookService } from '../../../core/services/book.service';
import { Book } from '../../../shared/models/book';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'app-books-overview',
  templateUrl: './books-overview.component.html',
  styleUrls: ['./books-overview.component.css']
})
export class BooksOverviewComponent implements OnInit {
  books$: Observable<Book[]>;

  constructor(
    private readonly bookService: BookService,
    private route: ActivatedRoute,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.getAllBooks();
  }

  toggleBookRead(book: Book) {
    this.bookService.update(book).subscribe(() => {
      this.notificationService.show('book updated');
      this.getAllBooks();
    });
  }

  private getAllBooks() {
    this.books$ = this.route.queryParams.pipe(
      map(x => x.read),
      switchMap(read => this.bookService.getAllBooks(read))
    );
  }
}
