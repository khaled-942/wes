import { Component, ElementRef, Input, ViewChild,OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import {Details} from '../model/Details'
import {Programms} from '../model/Programms'
import { Timeslots } from '../model/Timeslots';
import { Rooms } from '../model/Rooms';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  programs:Programms[];

  rooms:Rooms[];
  speakers: any;
  id:any;
  title:any; 
  // @ViewChild ('acc') acc! :ElementRef
  constructor(private serv: ApiServiceService) {
 
    this.speakers = [];
     this.programs=[];
    this.rooms=[];
}
ngOnInit(){

this.serv.confId.subscribe((cid)=>{
  this.serv.getconferenceProgrammes(cid).subscribe(c=>
    {
      this.programs=c.programmes;
     
    })

})
 }

}


