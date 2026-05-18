import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn
} from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  department: string;

  @Column({ default: true })
  canManageUsers: boolean;

  @Column({ default: true })
  canManageEvents: boolean;

  @Column({ default: true })
  canManageInstitutions: boolean;

  @OneToOne(() => User, user => user.admin)
  @JoinColumn()
  user: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
