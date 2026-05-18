import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne
} from "typeorm";
import { User } from "./user.entity";
import { Formation } from "./formation.entity";
import { Institution } from "./institution.entity";

@Entity()
export class Recommendation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titre: string;

  @Column("text")
  description: string;

  @Column({ nullable: true })
  field: string;

  @Column({ nullable: true })
  score: number;

  @ManyToOne(() => User, user => user.recommendations, { nullable: true })
  user: User;

  @ManyToOne(() => Formation, { nullable: true })
  formation: Formation;

  @ManyToOne(() => Institution, { nullable: true })
  institution: Institution;

  @CreateDateColumn()
  createdAt: Date;
}
