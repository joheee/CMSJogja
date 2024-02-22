import { createContext } from "react";

export interface InsertContextInterface {
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
    handleInsert?:()=>void
}

const DefaultInsertState = {
    name:'',
    address:'',
    description:'',
    price:0,
    navbar:[],
    navbarChild:[],
    navbarInput:'',
    profile:null,
    navbarChildInput:''
}

export const InsertContext = createContext<InsertContextInterface>(DefaultInsertState)