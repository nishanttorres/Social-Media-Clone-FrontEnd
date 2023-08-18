import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Comment} from "../entity/comment/comment";
import {Observable} from "rxjs";
import {Post} from "../entity/post/post";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  url:string="http://localhost:8080/comments"

  constructor(private http:HttpClient) { }

  addNewComment(userId:number,postId:number, comment:Comment):Observable<string>{
    // @ts-ignore
    return this.http.post<string>(`${this.url}/addComment/${userId}/${postId}`,comment,{responseType:'text'});
  }
  deleteComment(commentId:number):Observable<string>{
    // @ts-ignore
    return this.http.delete<string>(`${this.url}/${commentId}`,{responseType:'text'});
  }
  getPosts():Observable<Comment[]>{
    return this.http.get<Comment[]>(`${this.url}/postQuery/${1}`);
  }
}

