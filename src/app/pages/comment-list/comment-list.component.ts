import {Component, OnInit} from '@angular/core';
import {CommentService} from "../../service/comment.service";
import {Post} from "../../entity/post/post";
import {Comment} from "../../entity/comment/comment";

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit{
  constructor(private cs:CommentService) {
  }

  ngOnInit(): void {
    this.cs.getPosts().subscribe((comments:Comment[])=>{
      console.log(comments);
    })
  }

}
