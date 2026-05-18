import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";

@Entity()
export class Statistique {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 0 })
  nombreUtilisateurs: number;

  @Column({ default: 0 })
  nombreInstitutions: number;

  @Column({ default: 0 })
  nombreFormations: number;

  @Column({ default: 0 })
  nombreDossiers: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
