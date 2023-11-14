import {Speakers} from './Speakers'
import {Programms} from './Programms'

export interface Conference {
    _id: number;
    title: string; 
    title_abbrev: string;
    date:string;
    banner_title:string;
    location:string; 
    banner:string;
    about:string;
    programme_pdf:string;
    sprakers:Speakers[];
    programmes:Programms[];
}
