import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
// @Entity is a decorator that marks a class as a type of entity.
// The meaning of Entity is a table in the database.
import { User } from './User';
@Entity({ name: 'users_post' })
export class Post {
  // PrimaryGeneratedColumn is a decorator that marks a column as a primary key.
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne(() => User, (user) => user.posts)
  user: User;
}
