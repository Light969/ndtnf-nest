import { Injectable } from '@nestjs/common'
import { IntBook } from './interfaces/book.interface'


@Injectable() 
export class BooksService {
    private readonly books: IntBook[] = [];

    create(book: IntBook) {
        this.books.push(book);
    }

    findAll(): IntBook[] {
        return this.books;
    }
}
