import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('students', {schema: process.env.MYSQL_NAME})
export class Student {
    @PrimaryGeneratedColumn({type: 'int', name: 'id'})
    id: number;

    @Column('varchar', {name: 'name', nullable: true})
    name: string | null;

    @Column('varchar', {name: 'class', nullable: true})
    class: string | null;

    @Column('varchar', {name: 'password', nullable: false})
    password: string ;

    @Column('varchar', {name: 'email', nullable: false})
    email: string ;

    @Column('datetime', {name: 'created_at', nullable: true})
    createdAt: Date | null;
}