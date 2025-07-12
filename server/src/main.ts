import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
   app.enableCors({
    origin: 'http://localhost:3000', // Your frontend origin
    credentials: true,               // If you're using cookies or sessions
  });

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(4000, '0.0.0.0'); // Ensure it's not binding to ::1 only

}
bootstrap();
