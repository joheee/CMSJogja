import { HTMLInputTypeAttribute } from "react";

export interface FormInterface {
    isInsert:boolean
}

export interface CustomInputInterface {
    type:HTMLInputTypeAttribute,
    placeholder:string,
    setter:(e:any)=>void
}

export interface CustomSelectInterface {
    option:string[],
    setter:(e:any)=>void
}