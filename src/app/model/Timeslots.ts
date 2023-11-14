import {Speakers} from './Speakers'

export interface Timeslots{
    title: string;
    description:string;
    video_url:string;
    start: string;
    end: string;
    speakers: Speakers[];
    _id:string;
}