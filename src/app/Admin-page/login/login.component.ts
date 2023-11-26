import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder,Validators,FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}")]);
  password=new FormControl('',[Validators.required,Validators.minLength(6)])

  loginForm = this.fb.group({
    email: this.email,
    password: this.password

  });
  
  constructor(private fb: FormBuilder,private router: Router,private api:ApiServiceService){}

  onSubmit() {

this.api.login(this.loginForm.value).subscribe((i:any)=>
  {
    this.api.httpOption.Authorization=i.token
    localStorage.setItem('token', i.token);
    if(i.token && i.user.role == "admin"){
      this.router.navigateByUrl('admin-home')
    }
  }, (err:HttpErrorResponse) => {
    alert(err.error.message)
 })

  }
}
