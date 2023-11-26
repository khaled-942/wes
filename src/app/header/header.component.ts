import { Component,ViewChild,ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
public isCollapsed =true;
confTitle=""
@ViewChild('myDropDown') myDropDown!:ElementRef;
constructor(private api: ApiServiceService,private router:Router) { }
ngOnInit() {
  this.api.getmainconference().subscribe((i:any)=>{
    this.confTitle = i.conferences.title_abbrev
   
  })
}
over(myDropDown:any){
  myDropDown.open()
}
out(myDropDown:any){
  myDropDown.close()
}
adminView(){
 return this.api.isAuth();
}
navigatetologout(){
  this.router.navigateByUrl('admin-login')
  localStorage.removeItem('token');
  
}
}
