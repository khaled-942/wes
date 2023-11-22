import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  confDareArr: Array<any> = [];
  constructor(private api: ApiServiceService) {}
  ngOnInit() {
    this.api.getmainconference().subscribe((m:any)=>{

      this.api.confId.next(m.conferences._id);
      
    });
      // this.api.getconference().subscribe((conferences: any) => {
      //   conferences.conferences.map((conference: any) => {
      //     this.confDareArr.push(new Date(conference.day_one_date).getTime());
      //   });
      //   const currentConferenceDate = conferences.conferences.filter((getLastConf:any)=> new Date(getLastConf.day_one_date).getTime() === Math.max(...this.confDareArr))[0]._id;
      //   console.log(currentConferenceDate)
      //   this.api.confId.next(currentConferenceDate);
      // })
  }
}
