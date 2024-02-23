import { createContext } from "react";
import { InsertContextInterface } from "./interface";

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