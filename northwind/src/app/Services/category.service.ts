import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { category } from '../models/category';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categories: category[] = [];
  apiUrl = 'https://localhost:44314/api/categories/getall';
  constructor(private httpClient: HttpClient) {}

  getCategories (): Observable<ListResponseModel<category>> {
    return this.httpClient.get<ListResponseModel<category>>(this.apiUrl);
  }
}
