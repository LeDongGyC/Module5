import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>('http://localhost:3000/employee');
  }

  save(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>('http://localhost:3000/employee', employee);
  }

  findById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>('http://localhost:3000/employee/' + id);
  }

  update(id: number, employee: Employee): Observable<Employee> {
    return this.httpClient.put<Employee>('http://localhost:3000/employee/' + id, employee);
  }

  delete(id: number): Observable<Employee> {
    return this.httpClient.delete<Employee>('http://localhost:3000/employee/' + id);
  }
}
