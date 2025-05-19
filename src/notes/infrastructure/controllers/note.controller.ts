  import { Controller, Inject } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { NoteDTO } from 'src/notes/domain/dtos/note.dto';
import { NoteService } from 'src/notes/services/note.service';

@Controller()
export class NoteController {
  constructor(@Inject(NoteService) private readonly noteService: NoteService) {}

  @MessagePattern({ cmd: 'note.create' })
  async createNote(@Payload() payload: NoteDTO) {
    return this.noteService.saveNote(payload);
  }

  @MessagePattern({ cmd: 'note.findByUser' })
  async findNotesByUserId(@Payload() userId: number) {
    return this.noteService.findNotesByUserId(userId);
  }

  @MessagePattern({ cmd: 'note.findAll' })
  async findAllNotes() {
    return this.noteService.findAllNotes();
  }
}
