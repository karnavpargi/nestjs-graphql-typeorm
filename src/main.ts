import { NestFactory } from '@nestjs/core';
import { useContainer } from 'typeorm';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  await app
    .listen(process.env.PORT || 3000)
    .then(() => {
      console.log('server started on: ', process.env.PORT);
    })
    .catch((e) => {
      console.error(e);
    });
}
bootstrap();
