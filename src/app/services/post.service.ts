import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PostType } from '../types/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
  getPosts(): Observable<PostType[]> {
    return this.http.get<PostType[]>(environment.posts);
  }
  getPost(id: string): Observable<PostType> {
    return this.http.get<PostType>(`${environment.posts}/${id}`);
  }
}
