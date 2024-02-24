import { HTMLInputTypeAttribute } from "react";

export interface FormInterface {
    isInsert:boolean
}

export interface CustomInputInterface {
    type:HTMLInputTypeAttribute,
    placeholder:string,
    value?:any,
    disabled?:boolean,
    setter:(e:any)=>void
}

export interface CustomSelectInterface {
    option:string[],
    setter:(e:any)=>void
}

export interface DataInterface {
    id:string,
    name:string,
    address:string,
    description:string,
    profile:string,
    image:string,
    price:number,
    navbar:string,
    navbarChild:string
}

export interface CardListInterface {
    cardList:DataInterface[]
}

export interface ListContextInterface {
    handleRefresh?:()=>void
}

export interface FormContextInterface {
    name:string, 
    setName?:(e:string)=>void,
    address:string, 
    setAddress?:(e:string)=>void,
    description:string, 
    setDescription?:(e:string)=>void,
    price:number, 
    setPrice?:(e:number)=>void,
    navbar:string[],
    navbarChild:string[],
    navbarInput:string, 
    setNavbarInput?:(e:string)=>void,
    profile:File|null, 
    setProfile?:(e:File)=>void,
    navbarChildInput:string, 
    setNavbarChildInput?:(e:string)=>void,
    handleSubmit?:()=>void,
    id?:string
}

export interface DetailInterface {
    id:string,
    nav:string,
    navChild:string
}

export interface PopUpDescInterface {
    desc: string
    handlePopUp: () => void
  }