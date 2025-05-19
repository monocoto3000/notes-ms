import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoteModule } from './notes/infrastructure/note.module';
import { envsValues } from './common/config/get-envs-values';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: envsValues.DB_HOST,
      port: envsValues.DB_PORT,
      username: envsValues.DB_USERNAME,
      password: envsValues.DB_PASSWORD,
      database: envsValues.DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: true,
    }),
    NoteModule,
  ],
})

export class AppModule {}