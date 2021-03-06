import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoomsModule } from '@aichi/rooms';

@Module({
  imports: [RoomsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
