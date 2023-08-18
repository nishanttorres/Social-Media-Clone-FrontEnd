import {User} from "../user/user";
import {Post} from "../post/post";

export class Comment {
  id : number;
  date: Date;
  comment:string;
  user:User;
  post:Post;
  constructor(id:number, date:Date, comment:string, user:User, post:Post) {
    this.id = id;
    this.date = date;
    this.comment = comment;
    this.user = user;
    this.post = post;
  }
}
