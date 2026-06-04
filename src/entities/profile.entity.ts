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
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  phoneCountryCode: string;

  @Column({ nullable: true })
  birthDate: string;

  @Column({ nullable: true })
  sex: string;

  @Column({ nullable: true })
  nationality: string;

  @Column({ nullable: true })
  residenceCountry: string;

  @Column({ nullable: true })
  language: string;

  @Column({ nullable: true })
  studyLevel: string;

  @Column({ nullable: true })
  obtainedDiploma: string;

  @Column({ nullable: true })
  diplomaYear: string;

  @Column({ nullable: true })
  specialty: string;

  @Column({ nullable: true })
  generalAverage: string;

  @Column("text", { nullable: true })
  strongSubjects: string;

  @Column("text", { nullable: true })
  academicSkills: string;

  @Column({ nullable: true })
  academicField: string;

  @Column({ nullable: true })
  targetDegree: string;

  @Column("text", { nullable: true })
  spokenLanguages: string;

  @Column("text", { nullable: true })
  languageLevels: string;

  @Column({ nullable: true })
  desiredField: string;

  @Column({ nullable: true })
  desiredFormationType: string;

  @Column("text", { nullable: true })
  preferredUniversities: string;

  @Column({ nullable: true })
  preferredStudyLanguage: string;

  @Column({ nullable: true })
  estimatedBudget: string;

  @Column({ nullable: true })
  currentInstitution: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  country: string;

  @Column("text", { nullable: true })
  bio: string;

  @Column("text", { nullable: true })
  avatarUrl: string;

  @Column("text", { nullable: true })
  academicDocuments: string;

  @Column({ nullable: true })
  academicDocumentName: string;

  @Column("text", { nullable: true })
  academicInterests: string;

  @Column("text", { nullable: true })
  personalInterests: string;

  @OneToOne(() => User, user => user.profile)
  @JoinColumn()
  user: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
