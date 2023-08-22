import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../entity/user/user";
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit{
  constructor(private formBuilder:FormBuilder,
              private userService: UserService,
              private router:Router) {
  }
  // @ts-ignore
  signInForm: FormGroup;
  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      email:['',[Validators.required, Validators.email]],
      password:['',Validators.required]
    })
  }
  validate():void{
    this.userService.validateUser(this.signInForm.value).subscribe((user:User)=>{
      if(user === null){
        alert("Email/Password don't match");
      }
      else{
        this.router.navigate([`post/userId/${user.id}`]);
      }
    })
  }

    protected readonly navigator = navigator;
}
