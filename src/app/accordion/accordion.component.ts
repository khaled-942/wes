import { Component, ElementRef, Input, ViewChild,OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import {Details} from '../model/Details'
import {Programms} from '../model/Programms'

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  events: Details[];
  programs:Programms[];
  speakers: any;
  id:any;
  title:any; 
  // @ViewChild ('acc') acc! :ElementRef
  constructor(private serv: ApiServiceService) {
    this.events = [];
    this.speakers = [];
    this.programs=[]
}
ngOnInit(){
  this.serv.progIdobs.subscribe((dataId)=>{
    this.serv.getprogrammesDetails(dataId).subscribe((a: any) => {
     this.events= a.details;
     this.id=this.events.map(i=>i._id).shift();
     

    });
  })
this.serv.confId.subscribe((cid)=>{
  this.serv.getconferenceProgrammes(cid).subscribe((c=>
    {
      this.programs=c.programmes;

    }))
})
 }

}


