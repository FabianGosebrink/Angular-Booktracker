import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Book tracker';

  navItems: any[] = [
    {
      name: 'Overview',
      route: 'books/overview',
      queryParams: {
        read: false
      }
    },
    { name: 'Add new book', route: 'books/create' },
    {
      name: 'All read',
      route: 'books/overview',
      queryParams: {
        read: true
      }
    },
    {
      name: 'All unread',
      route: 'books/overview',
      queryParams: {
        read: false
      }
    }
  ];
}
