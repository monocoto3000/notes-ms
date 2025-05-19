import { NoteI } from 'src/notes/domain/entites/interfaces/NoteI';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('notes')
export class Note implements NoteI {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column({ type: 'int' })
  userId: number;
  @Column({ type: 'varchar', length: 255, unique: true })
  title: string;
  @Column({ type: 'varchar', length: 255, unique: true })
  content: string;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}