import { Column, Entity } from 'typeorm';

@Entity()
export class BaseEntity {
  @Column({ nullable: false, default: Date.now() })
  createdAt: Date;

  @Column({ nullable: true })
  updatedAt: Date;

  @Column({ nullable: true })
  isDeleted: Date;

  @Column({ nullable: true })
  createdBy: number;

  @Column({ nullable: true })
  updatedBy: number;
}
