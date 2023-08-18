import {Component, OnInit} from '@angular/core';
import {PostService} from "../../service/post.service";
import {Post} from "../../entity/post/post";
import {User} from "../../entity/user/user";
import {UserService} from "../../service/user.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {CommentService} from "../../service/comment.service";
import {faTrash,faPen, faPlus, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit{
  faTrash = faTrash;
  faPen = faPen;
  faPlus = faPlus;
  signout = faArrowRight;
  posts:Post[] = [];
  user?:User;
  post?:Post;
  userName?:string;
  // @ts-ignore
  postForm:FormGroup;
  // @ts-ignore
  commentForm:FormGroup;
  formHidden:boolean = true;
  userId: number = 102;
  constructor(private postService:PostService,
              private userService:UserService,
              private commentService:CommentService,
              private formBuilder:FormBuilder,
              private route:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUserById(this.userId).subscribe((user1:User)=>this.user = user1);
    this.getAllPostByUserId();
    this.postForm = this.formBuilder.group({
      id:[''],
      numberOfLikes:0,
      post:[''],
      date:Date.now(),
      comments:[],
      user:['']
    });
    this.commentForm = this.formBuilder.group({
      user:this.user,
      comment:[''],
      date:Date.now(),
      id:[''],
      post:['']
    });
  }
  getAllPostByUserId():void{
    this.userService.getUserById(this.userId).subscribe((user:User)=>this.user = user);
    this.postService.getAllPostsByUserId(this.userId).subscribe((posts:Post[])=>{
      this.posts = posts.reverse();
      console.log(this.posts);
    })
  }

  addNewPost():void{
    this.post = this.postForm.value;
    if((typeof this.post?.id)=== "number"){
      this.postService.editPost(this.postForm.value).subscribe((response:string)=>{
        this.postForm.reset();
        this.toggleForm();
        this.getAllPostByUserId();
    })}
    else{
      this.postService.addNewPost(this.userId, this.postForm.value).subscribe((response:string)=>{
        this.postForm.reset();
        this.toggleForm();
        this.getAllPostByUserId();
      });
    }
  }
  deletePost(id:number):void{
    this.postService.deletePost(id).subscribe((response:string)=>{
      alert(response);
      this.getAllPostByUserId();
    })
  }
  editPost(post:Post):void{
    this.toggleForm();
    this.postForm.patchValue(post);
  }
  toggleForm() {
    this.formHidden = !this.formHidden;
  }

  addNewComment(postId:number):void{
    this.commentService.addNewComment(this.userId,postId,this.commentForm.value).subscribe((response:string)=>{
      this.commentForm.reset();
      this.getAllPostByUserId();
    });
  }
  deleteComment(commentId:number):void{
    this.commentService.deleteComment(commentId).subscribe((response:string)=>{
      alert(response);
      this.getAllPostByUserId();
    })
  }

  protected readonly console = console;
}
