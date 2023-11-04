export interface Conference {
    id: number;
    title:string; 
    title_abbrev: string;
    day_one_date: string;
    day_two_date: string;
    banner_title_one:string;
    banner_title_two:string;
    location:string; 
    banner:string;
    about:string;
    sprakers:[];
    programmes:[];
}
