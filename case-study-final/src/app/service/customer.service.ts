import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>('http://localhost:3000/customer');
  }

  save(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>('http://localhost:3000/customer', customer);
  }

  findById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>('http://localhost:3000/customer/' + id);
  }

  update(id: number, customer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>('http://localhost:3000/customer/' + id, customer);
  }

  delete(id: number): Observable<Customer> {
    return this.httpClient.delete<Customer>('http://localhost:3000/customer/' + id);
  }

  search(nameSearch?: string, dateStart?: string, dateEnd?: string) {
    let url = 'http://localhost:3000/customer?name_like=' + nameSearch.trim();
    if (dateStart !== '') {
      url += '&dateOfBirth_gte=' + dateStart;
    }
    if (dateEnd !== '') {
      url += '&dateOfBirth_lte=' + dateEnd;
    }
    return this.httpClient.get<Customer[]>('' + url);
  }
}
