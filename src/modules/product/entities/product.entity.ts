import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  url: string;

  @Column({ nullable: true })
  description?: string;

  @CreateDateColumn({name:"created_at", type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({name:"updated_at", type: 'timestamptz' })
  updatedAt: Date;
}
