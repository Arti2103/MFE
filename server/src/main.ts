import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  // Use an environment variable or fallback to a default port
  const port = process.env.PORT || 8080;
  console.log(`Application is running on port ${port}`);
  await app.listen(port);
}
bootstrap();