import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksServiceModule } from './BooksService/BooksService.module';

@Module({
  imports: [BooksServiceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
