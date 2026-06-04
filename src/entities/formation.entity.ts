import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  ManyToOne,
  OneToMany
} from "typeorm";
import { User } from "./user.entity";
import { Institution } from "./institution.entity";
import { Dossier } from "./dossier.entity";

@Entity()
export class Formation {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titre: string;

  @Column("text")
  description: string;

  @Column({ default: "Général" })
  domaine: string;

  @Column()
  niveauRequis: string;

  @Column("float")
  fraisInscription: number;

  @Column()
  duree: string;

  @Column()
  langue: string;

  @ManyToOne(() => Institution, institution => institution.formations)
  institution: Institution;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToMany(() => User, user => user.formations)
  users: User[];

  @OneToMany(() => Dossier, dossier => dossier.formation)
  dossiers: Dossier[];
}
