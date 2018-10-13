import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material.module';
import { BooksRoutes } from './books.routing';
import { BooksOverviewComponent } from './container/books-overview/books-overview.component';
import { CreateBookComponent } from './container/create-book/create-book.component';

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule.forChild(BooksRoutes)],
  exports: [],
  declarations: [BooksOverviewComponent, CreateBookComponent],
  providers: [],
})
export class BooksModule {}
