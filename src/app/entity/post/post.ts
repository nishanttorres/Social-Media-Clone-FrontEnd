import {Comment} from "../comment/comment";
import {User} from "../user/user";

export class Post {
  id : number;
  date: Date;
  post:string;
  numberOfLikes: number;
  comments: Comment[];
  user: User;

  constructor(id:number, date:Date, post:string,numberOfLikes: number, comments: Comment[], user:User) {
    this.id = id;
    this.date = date;
    this.post = post;
    this.numberOfLikes = numberOfLikes;
    this.comments = comments;
    this.user = user;
  }

}
