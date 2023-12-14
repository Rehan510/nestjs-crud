import { Entity, Column, PrimaryGeneratedColumn, OneToMany,JoinColumn } from 'typeorm';
import { Employee } from '../../employees/entities/employee.entity'
@Entity()
export class Company {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    regNo: string;

    @Column()
    city: string;
    @OneToMany(type => Employee, employee => employee.company)
    employees: Employee[]

}
