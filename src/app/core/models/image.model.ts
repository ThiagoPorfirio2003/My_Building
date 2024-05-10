import { Timestamp } from "@angular/fire/firestore";

export interface myImage
{
    uploadDate : Timestamp;
    urlImage: string;
    uidPublisher : string;
    userNamePublisher : string;
    likes : number;
    dislikes : number;
    isAGoodThing : boolean;
}