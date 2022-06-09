import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CategoryType } from '../types/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  getCategorys(): Observable<CategoryType[]> {
    return this.http.get<CategoryType[]>(environment.categorys);
  }
  getCategory(id: string): Observable<CategoryType> {
    return this.http.get<CategoryType>(`${environment.categorys}/${id}`);
  }
}
