import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config'; // Import ConfigService
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { GigsModule } from './gigs/gigs.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // Load environment variables from .env
    MongooseModule.forRootAsync({
      imports: [ConfigModule], // Inject ConfigModule
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'), // Use the environment variable
      }),
      inject: [ConfigService], // Inject ConfigService
    }),
    UsersModule,
    GigsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}