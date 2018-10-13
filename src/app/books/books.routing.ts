import { Routes } from '@angular/router';
import { BooksOverviewComponent } from './container/books-overview/books-overview.component';
import { CreateBookComponent } from './container/create-book/create-book.component';

export const BooksRoutes: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  { path: 'overview', component: BooksOverviewComponent },
  { path: 'create', component: CreateBookComponent },
];
