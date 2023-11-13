import {Timeslots} from './Timeslots'

export interface Details{
    _id: number;
    type: string;
    timeslot_title: string;
    timeslots?: Timeslots[];

}