import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  private postUrl = 'https://optimustest-3f8e8.firebaseio.com/posts.json';


  constructor(private http: HttpClient) { }
  getPosts (): Observable<Post[]> {
    return this.http.get<Post[]>(this.postUrl)
      .pipe(
        catchError(this.handleError)
      );
  }
  getPost(id: number): Observable<Post> {
    const url = `https://optimustest-3f8e8.firebaseio.com/posts/${id}.json`;
    return this.http.get<Post>(url)
    .pipe(
      catchError(this.handleError)
    );
  }
  private handleError(res: HttpErrorResponse) {
    return observableThrowError(res.error || 'Server error');
  }
}
