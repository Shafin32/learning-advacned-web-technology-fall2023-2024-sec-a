import { Injectable } from '@nestjs/common';
import { Employee } from './entities/employee.model';
import { CreateEmployeeDto } from './DTO/createEmployee.dto';

@Injectable()
export class AdminService {
    employees: Employee[] = [];
    create(createEmployeeDto: CreateEmployeeDto){
        const newEmployee = new Employee(createEmployeeDto.eName, createEmployeeDto.ePhone, createEmployeeDto.eUname, createEmployeeDto.ePass);
        this.employees.push(newEmployee);
        return "New employee created ... ";
    }

    getAll(){
       // console.log(this.users);
        return [...this.employees];
    }
    
    get(id:number){
        return [this.employees[id-1]];
    }
}
