import {Rooms} from './Rooms'

export interface Programms {
    _id:number;
    date:string;
    type:string;
    rooms_num:number;
    rooms:Rooms[]
}
