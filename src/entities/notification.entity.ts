import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne
} from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Notification {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titre: string;

  @Column("text")
  description: string;

  @Column()
  type: string;

  @Column({ nullable: true })
  url: string;

  @Column({ default: false })
  lu: boolean;

  @ManyToOne(() => User, user => user.receivedNotifications, { nullable: true })
  receiver: User;

  @ManyToOne(() => User, user => user.sentNotifications, { nullable: true })
  sender: User;

  @CreateDateColumn()
  date: Date;
}
