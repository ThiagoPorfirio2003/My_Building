import { enumProfile, enumSex } from "../enums/userProperties"

export interface MyUser
{
    uid: string,
    email : string,
    profile : enumProfile,
    sex : enumSex,
    userName : string;
}

export interface MyUserAccessData
{
    email : string,
    password: string
}