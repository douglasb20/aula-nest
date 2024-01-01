import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Tag } from './tags.entity';
import { randomUUID } from 'node:crypto';

@Entity('courses')
export class Course {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 40 })
  name: string;

  @Column()
  description: string;

  @JoinTable({
    name: 'courses_tags',
    joinColumn: {
      name: 'courses_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'tags_id',
      referencedColumnName: 'id',
    },
    synchronize: false,
  })
  @ManyToMany(() => Tag, tag => tag.courses, {
    eager: true,
  })
  tags: Tag[];

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @BeforeInsert()
  generatedId() {
    if (this.id) {
      return;
    }
    this.id = randomUUID();
  }
}
