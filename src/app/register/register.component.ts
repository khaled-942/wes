import { Component } from '@angular/core';
import { FormBuilder,Validators,FormControl} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  email = new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}")]);
  password=new FormControl('',[Validators.required])

  loginForm = this.fb.group({
    email: this.email,
    password: this.password

  });
  
  constructor(private fb: FormBuilder,private router: Router){}

  onSubmit() {}
}
