import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OperationService {
  url = '';
  constructor(private http: HttpClient) {}

  addPermutation(formValue) {
    return this.http.post(environment.baseUrl + 'permutation', formValue);
  }
  getPermutation() {
    return this.http.get(environment.baseUrl + 'permutation');
  }

 addFibonacci(formValue) {
// debugger
    return this.http.post(environment.baseUrl + 'fibonacci', formValue);
  }
  getFibonacci() {
    return this.http.get(environment.baseUrl + 'fibonacci');
  }
}
