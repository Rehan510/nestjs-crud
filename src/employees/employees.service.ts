import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity'

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private employeesRepository: Repository<Employee>,
  ) { }
 async create(createEmployeeDto: CreateEmployeeDto) {
    console.log(createEmployeeDto)
    return await this.employeesRepository.save(createEmployeeDto);
  }

  findAll(): Promise<any[]> {
    return this.employeesRepository.find()
  }

  findOne(id: number): Promise<any | null> {
    return this.employeesRepository.findOneBy({ id });
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return `This action updates a #${id} employee`;
  }

  async remove(id: number): Promise<void> {
    await this.employeesRepository.delete(id);
  }
}
