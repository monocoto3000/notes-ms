import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Note } from './entities/note.entity';
import { NoteController } from './controllers/note.controller';
import { NoteService } from '../services/note.service';
import { NoteRepository } from './repository/note.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Note])],
  controllers: [NoteController],
  providers: [NoteService, NoteRepository],
  exports: [NoteRepository],
})
export class NoteModule {}
