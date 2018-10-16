﻿using System.Collections.Generic;
using System.Linq;
using Backend.Entities;

namespace Backend.Repositories
{
    public interface IBookRepository
    {
        Book GetSingle(int id);
        void Add(Book item);
        void Delete(int id);
        Book Update(int id, Book item);
        IQueryable<Book> GetAll();
        int Count();

        bool Save();
    }
}