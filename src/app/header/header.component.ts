import { Component,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
public isCollapsed =true;
@ViewChild('myDropDown') myDropDown!:ElementRef;
constructor() { }
over(myDropDown:any){
  myDropDown.open()
}
out(myDropDown:any){
  myDropDown.close()
}

}
