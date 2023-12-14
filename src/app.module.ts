import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

import { EmployeesModule } from './employees/employees.module';
import {Employee} from './employees/entities/employee.entity'
import {Company} from './company/entities/company.entity'
import { CompanyModule } from './company/company.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Root@123',
      database: 'test',
      entities: [Employee,Company],
      synchronize: true,
    }),
    EmployeesModule,
    CompanyModule
  ],
})

export class AppModule {
  constructor(private dataSource: DataSource) { }
}
