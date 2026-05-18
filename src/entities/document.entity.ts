import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne
} from "typeorm";
import { User } from "./user.entity";
import { Parcours } from "./parcours.entity";
import { Dossier } from "./dossier.entity";

@Entity()
export class Document {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column()
  type: string;

  @Column("text")
  urlStockage: string;

  @Column({ nullable: true })
  taille: string;

  @Column("text", { nullable: true })
  description: string;

  @ManyToOne(() => User, user => user.documents, { nullable: true })
  user: User;

  @ManyToOne(() => Parcours, parcours => parcours.documents, { nullable: true })
  parcours: Parcours;

  @ManyToOne(() => Dossier, dossier => dossier.documents, { nullable: true })
  dossier: Dossier;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
