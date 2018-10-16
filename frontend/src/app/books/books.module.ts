import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { BooksRoutes } from './books.routing';
import { BookDetailsComponent } from './container/book-details/book-details.component';
import { BooksOverviewComponent } from './container/books-overview/books-overview.component';
import { CreateBookComponent } from './container/create-book/create-book.component';
import { BookListComponent } from './presentational/book-list/book-list.component';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(BooksRoutes),
  ],
  exports: [],
  declarations: [
    BooksOverviewComponent,
    CreateBookComponent,
    BookListComponent,
    BookDetailsComponent,
  ],
  providers: [],
})
export class BooksModule {}
