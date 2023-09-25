import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Profile } from './Profile';

// @Entity is a decorator that marks a class as a type of entity.
// The meaning of Entity is a table in the database.
@Entity({ name: 'users' })
export class User {
  // PrimaryGeneratedColumn is a decorator that marks a column as a primary key.
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column() // La date de création est automatiquement ajoutée
  createdAt: string;

  @Column({ nullable: true }) // La raison que la propriété est nullable est que la propriété est facultative. Une stratégie pour que l'authentification puisse être facultative ou obligatoire.
  authStrategy: string;

  @Column({ nullable: true })
  profileId: number;

  @OneToOne(() => Profile)
  @JoinColumn({ name: 'profileId' })
  profile: Profile;
}
