import {Column, CreateDateColumn, Entity,OneToMany,PrimaryGeneratedColumn, UpdateDateColumn, ManyToMany, JoinTable, OneToOne} from "typeorm"
import { UserRole, UserStatus } from "../enums/user.enum"
import { Parcours } from "./parcours.entity"
import { Event } from "./event.entity"
import { Formation } from "./formation.entity"
import { Profile } from "./profile.entity"
import { Admin } from "./admin.entity"
import { Document } from "./document.entity"
import { Notification } from "./notification.entity"
import { Chat } from "./chat.entity"
import { Recommendation } from "./recommendation.entity"


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id : number
    
    @Column()
    firstname : string

    @Column()
    lastname : string

    @Column({unique:true})
    email : string
    
    @Column()
    password : string 

    @Column()
    birthday : Date 

    @Column({
        type: "enum",
        enum : UserStatus,
        default:UserStatus.ACTIVE
    })
    status : UserStatus 

    @Column({nullable: true })
    avatar : string 

    @CreateDateColumn()
    createdAt : Date 
    
    @UpdateDateColumn()
    updateddAt : Date

    @Column({
        type: "enum",
        enum : UserRole,
        default:UserRole.STUDENT
        
    }) 
    role : UserRole

    @OneToMany(() => Parcours, parcours => parcours.user)
    parcours: Parcours[]

    @ManyToMany(() => Event, event => event.users)
    @JoinTable()
    events: Event[]

    @ManyToMany(() => Formation, formation => formation.users)
    @JoinTable()
    formations: Formation[]

    @OneToOne(() => Profile, profile => profile.user)
    profile: Profile

    @OneToOne(() => Admin, admin => admin.user)
    admin: Admin

    @OneToMany(() => Document, document => document.user)
    documents: Document[]

    @OneToMany(() => Notification, notification => notification.receiver)
    receivedNotifications: Notification[]

    @OneToMany(() => Notification, notification => notification.sender)
    sentNotifications: Notification[]

    @OneToMany(() => Chat, chat => chat.receiver)
    receivedChats: Chat[]

    @OneToMany(() => Chat, chat => chat.sender)
    sentChats: Chat[]

    @OneToMany(() => Recommendation, recommendation => recommendation.user)
    recommendations: Recommendation[]

}
