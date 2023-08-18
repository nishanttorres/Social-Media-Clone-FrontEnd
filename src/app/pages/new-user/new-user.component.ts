import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../entity/user/user";
import {UserService} from "../../service/user.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {toNumbers} from "@angular/compiler-cli/src/version_helpers";

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit{
  title:string = 'Sign Up';
  // @ts-ignore
  userForm: FormGroup;
  userId?:number;
  user?:User;
  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router:Router,
              private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      id:[''],
      firstName:[''],
      lastName:[''],
      dob:[''],
      posts:[],
      comments:[],
      email:['', [Validators.email,Validators.required]],
      password:['', [Validators.required]]
    })
    this.userId = Number(this.route.snapshot.paramMap.get('id'));
    if(this.userId != 0){
      this.title = 'Edit User';
      this.userService.getUserById(this.userId).subscribe((user1:User)=>{
        this.userForm.patchValue(user1);
      })
    }
  }
  addNewUser():void{
    if(this.userId != 0){
      this.userService.editUser(this.userForm.value).subscribe((response:string)=>{
        this.router.navigate(['/user']);
      })
    }else{
      this.userService.addNewUser(this.userForm.value).subscribe((response:string)=>{
        alert(response);
        this.router.navigate(['/signIn']);
      });
    }
  }
}
