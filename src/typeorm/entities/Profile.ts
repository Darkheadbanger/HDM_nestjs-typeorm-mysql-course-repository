import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// @Entity is a decorator that marks a class as a type of entity.
// The meaning of Entity is a table in the database.
@Entity({ name: 'users_profiles' })
export class Profile {
  // PrimaryGeneratedColumn is a decorator that marks a column as a primary key.
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ unique: true })
  firstName: string;

  @Column()
  lastName: string;

  @Column() // La date de création est automatiquement ajoutée
  age: number;

  @Column()
  dob: string;
}
