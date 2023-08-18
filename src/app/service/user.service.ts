import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../entity/user/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url:string = "http://localhost:8080/users"
  constructor(private http:HttpClient) {}

  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }
  deleteUserById(id:number):Observable<string>{
    // @ts-ignore
    return this.http.delete<string>(this.url.concat('/').concat(id.toString()),{responseType:'text'});
  }
  addNewUser(user:User):Observable<string>{
    // @ts-ignore
    return this.http.post<string>(this.url,user,{responseType:'text'});
  }
  editUser(user:User):Observable<string>{
    // @ts-ignore
    return this.http.patch<string>(this.url, user, {responseType:'text'});
  }
  getUserById(id:number):Observable<User>{
    return this.http.get<User>(`${this.url}/${id}`);
  }

  validateUser(user:User):Observable<User>{
    return this.http.post<User>(`${this.url}/validate`, user);
  }
}
