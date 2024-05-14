import { Timestamp } from "@angular/fire/firestore";

export interface MyImage
{
    id : string;
    isPretty : boolean;
    url : string;
    originDate : Timestamp;
    ownerUID : string;
    ownerUserName : string;
    likes : number;
    name : string;
    UIDwhoLikes : string[];
    currentUserLike : boolean;
}