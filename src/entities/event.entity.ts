import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToMany } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Event {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  location: string;

  @Column()
  date: Date;

  @Column()
  type: string;

  @Column()
  capaciteMax: number;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToMany(() => User, user => user.events)
  users: User[];
}