import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";

@Entity()
export class HousingOffer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  city: string;

  @Column()
  price: string;

  @Column()
  type: string;

  @Column()
  owner: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column("text")
  details: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
