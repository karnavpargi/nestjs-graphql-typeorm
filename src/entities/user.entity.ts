import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({})
  email: string;

  @Column({})
  name: string;

  @Column({ nullable: true })
  surname: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  age: number;
}
