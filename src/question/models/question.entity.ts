import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class QuestionEntity{    
    @PrimaryGeneratedColumn("uuid")
    id:string;
    @Column({ nullable:true })
    question:string;
    @Column("simple-array", {nullable:true })
    answers:string[];
    @Column({nullable:true })
    correct:number;
    @Column("simple-array", {nullable:true })
    fifty:number[];


}