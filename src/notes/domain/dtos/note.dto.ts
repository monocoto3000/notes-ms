import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class NoteDTO {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  content: string;

  @IsNotEmpty()
  @IsNumber()
  userId: number;
}
