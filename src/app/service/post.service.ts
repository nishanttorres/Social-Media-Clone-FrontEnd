import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "../entity/post/post";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url:string = "http://localhost:8080/posts";
  constructor(private http:HttpClient) {}

  getAllPostsByUserId(id:number):Observable<Post[]>{
    return this.http.get<Post[]>(`${this.url}/userId/${id}`);
  }

  addNewPost(id:number, post:Post):Observable<string>{
    // @ts-ignore
    return this.http.post<string>(`${this.url}/addPost/${id}`, post,{responseType:"text"});
  }
  deletePost(id:number):Observable<string>{
    // @ts-ignore
    return this.http.delete<string>(`${this.url}/${id}`, {responseType:"text"});
  }

  editPost(post:Post):Observable<string>{
    // @ts-ignore
    return this.http.patch<string>(this.url,post, {responseType:"text"});
  }
}
