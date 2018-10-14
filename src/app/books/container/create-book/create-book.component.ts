import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../../../core/services/book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  form: FormGroup;
  genres = [];

  constructor(
    private readonly bookService: BookService,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      author: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      genre: new FormControl('')
    });

    this.genres = this.bookService.getAllGenres();
  }

  addBook() {
    this.bookService.add(this.form.value);

    this.form.reset();
    this.router.navigate(['/books/overview']);
  }
}
