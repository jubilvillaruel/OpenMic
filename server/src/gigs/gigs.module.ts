import { Module } from '@nestjs/common';
import { GigsController } from './gigs.controller';
import { GigsService } from './gigs.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Gig, GigSchema } from './schemas/gig.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Gig.name,
        schema: GigSchema
      }
    ]),
  ],
  controllers: [GigsController],
  providers: [GigsService],
  exports: [GigsService]
})
export class GigsModule {}
