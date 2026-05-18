import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany
} from "typeorm";
import { Formation } from "./formation.entity";
import { Document } from "./document.entity";
import { User } from "./user.entity";

@Entity()
export class Dossier {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column("text", { nullable: true })
  description: string;

  @Column({ nullable: true })
  dateDepot: Date;

  @Column({ nullable: true })
  dateRecu: Date;

  @Column({ default: "normal" })
  priorite: string;

  @Column({ default: "PENDING" })
  status: string;

  @Column({ nullable: true })
  motif: string;

  @Column({ nullable: true })
  fullName: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  nationality: string;

  @Column({ nullable: true })
  lastDiploma: string;

  @Column("text", { nullable: true })
  motivation: string;

  @ManyToOne(() => User, { nullable: true })
  user: User;

  @ManyToOne(() => Formation, formation => formation.dossiers, { nullable: true })
  formation: Formation;

  @OneToMany(() => Document, document => document.dossier)
  documents: Document[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
