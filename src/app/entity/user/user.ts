import {Post} from "../post/post";
import {Comment} from "../comment/comment";

export class User {
  id:number;
  firstName:string;
  lastName:string;
  dob:Date;
  posts:Post[];
  email:string;
  password:string;
  comments: Comment[];


  constructor(id:number, firstName:string, lastName:string, dob:Date, posts:Post[], email:string, password:string, comments: Comment[]) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
    this.posts = posts;
    this.email = email;
    this.password = password;
    this.comments = comments;
  }

}
