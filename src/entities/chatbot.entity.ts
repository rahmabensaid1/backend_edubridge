import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";

@Entity()
export class Chatbot {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column("text")
  modele: string;

  @Column()
  langue: string;

  @Column({ nullable: true })
  category: string;

  @Column({ default: true })
  active: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
