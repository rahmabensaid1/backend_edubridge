import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from "typeorm";
import { Formation } from "./formation.entity";

@Entity()
export class Institution {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column()
  ville: string;

  @Column("text", { nullable: true })
  description: string;

  @Column({ nullable: true })
  adresse: string;

  @Column({ nullable: true })
  siteWeb: string;

  @Column({ unique: true })
  email: string;

  @Column()
  type: string; // university / school / institute

  @Column({ nullable: true })
  parentUniversity: string;

  @Column()
  pays: string;

  @Column({ nullable: true })
  logo: string;

  @Column({ default: false })
  verified: boolean;

  @OneToMany(() => Formation, formation => formation.institution)
  formations: Formation[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
