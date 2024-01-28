import { Module } from '@nestjs/common'
import { BooksController } from './BooksService.controller'
import { BooksService } from './BooksService.service'

@Module({
    controllers: [BooksController],
    providers: [BooksService],
    exports: [BooksService]
})

export class BooksServiceModule {}