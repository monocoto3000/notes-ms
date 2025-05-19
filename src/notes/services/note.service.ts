import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { NoteRepository } from '../infrastructure/repository/note.repository';
import { NoteDTO } from '../domain/dtos/note.dto';

@Injectable()
export class NoteService {
  constructor(
    @Inject(NoteRepository)
    private readonly noteRepository: NoteRepository
  ) {}

  async saveNote(noteDto: NoteDTO) {
    try {
      return await this.noteRepository.createNote(noteDto);
    } catch (error) {
      throw new RpcException({
        status: HttpStatus.BAD_REQUEST,
        message: error.message,
      });
    }
  }

  async findNotesByUserId(userId: number) {
    try {
      return await this.noteRepository.findNotesByUserId(userId);
    } catch (error) {
      throw new RpcException({
        status: HttpStatus.BAD_REQUEST,
        message: error.message,
      });
    }
  }

  async findAllNotes() {
    try {
      return await this.noteRepository.findAllNotes();
    } catch (error) {
      throw new RpcException({
        status: HttpStatus.BAD_REQUEST,
        message: error.message,
      });
    }
  }
}
