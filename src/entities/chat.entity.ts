import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne
} from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Chat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  titre: string;

  @Column("text")
  contenu: string;

  @ManyToOne(() => User, user => user.receivedChats, { nullable: true })
  receiver: User;

  @ManyToOne(() => User, user => user.sentChats, { nullable: true })
  sender: User;

  @CreateDateColumn()
  date: Date;
}
