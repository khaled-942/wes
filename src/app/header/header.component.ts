import { Component,ViewChild,ElementRef } from '@angular/core';
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
constructor(private api: ApiServiceService) { }
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

}
