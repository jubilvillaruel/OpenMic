import { Module } from '@nestjs/common';
import { GigsController } from './gigs.controller';

@Module({
  controllers: [GigsController]
})
export class GigsModule {}
