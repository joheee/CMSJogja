import { createContext } from "react";

interface InsertContextInterface {
    name:string, 
    setName?:(e:string)=>void,
    address:string, 
    setAddress?:(e:string)=>void,
    price:number, 
    setPrice?:(e:number)=>void,
    navbar:string[],
    navbarChild:string[],
    navbarInput:string, 
    setNavbarInput?:(e:string)=>void,
    navbarChildInput:string, 
    setNavbarChildInput?:(e:string)=>void
}

const DefaultInsertState = {
    name:'',
    address:'',
    price:0,
    navbar:[],
    navbarChild:[],
    navbarInput:'',
    navbarChildInput:''
}

export const InsertContext = createContext<InsertContextInterface>(DefaultInsertState)