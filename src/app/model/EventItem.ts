import {Speakers} from './Speakers'

export interface EventItem {
    title?: string;
    description?: string;
    start?: string; 
    end?: string;
    speakers?:Speakers[]
    _id:string
  }