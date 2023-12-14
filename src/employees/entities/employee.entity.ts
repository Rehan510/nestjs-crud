import { Entity, Column, PrimaryGeneratedColumn,ManyToOne,JoinColumn } from 'typeorm';
import {Company} from '../../company/entities/company.entity'
@Entity()
export class Employee {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ default: true })
    isActive: boolean;
    @Column()
    companyId:number;

    @ManyToOne(type => Company, commpany => commpany.employees,{cascade: true})
  
    company: Company
}
