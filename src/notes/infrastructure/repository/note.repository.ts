import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Note } from '../entities/note.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { NoteI } from 'src/notes/domain/entites/interfaces/NoteI';
import { NoteDTO } from 'src/notes/domain/dtos/note.dto';

@Injectable()
export class NoteRepository {
  constructor(
    @InjectRepository(Note)
    private readonly noteRepository: Repository<Note>,
  ) {}

  async createNote(note: NoteDTO): Promise<NoteI> {
    try {
      const newNote = await this.noteRepository.save(note);
      return newNote;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findNotesByUserId(userId: number): Promise<NoteI[]> {
    try {
      const notes = await this.noteRepository.find({
        where: { userId },
      });
      return notes;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAllNotes(): Promise<NoteI[]> {
    try {
      const notes = await this.noteRepository.find();
      return notes;
    } catch (error) {
      throw new Error(error);
    }
  }
}