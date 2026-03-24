import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import { UserRole, UserStatus } from "../enums/user.enum";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstname: string

    @Column()
    lastname: string

    @Column({ unique: true })
    email: string

    @Column()
    password: string

    @Column()
    birthday: Date

    @Column({
        type: "enum",
        enum: UserStatus,
        default: UserStatus.ACTIVE}
    )
    status: UserStatus

    @Column({nullable: true})
    avatar: string 

    @Column()
    createdAt: Date

    @Column()
    updatedAt: Date

    @Column({ 
        type: "enum",
        enum: UserRole,
        default: UserRole.STUDENT
    })
    role: UserRole


}