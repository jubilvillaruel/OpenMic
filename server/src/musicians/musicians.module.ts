import { Module } from '@nestjs/common';
import { MusiciansService } from './musicians.service';
import { MusiciansController } from './musicians.controller';


@Module({
  providers: [MusiciansService],
  controllers: [MusiciansController]
})
export class MusiciansModule {}
