import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column({ nullable: true, select: false })
  password: string;

  @Column({ nullable: true })
  name?: string;

  @Column({ default: 'active' })
  accountStatus: 'active' | 'inactive';

  @CreateDateColumn({name:"created_at", type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({name:"updated_at", type: 'timestamptz' })
  updatedAt: Date;
}
