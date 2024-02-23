import { createContext } from "react";
import { FormContextInterface } from "./interface";

const DefaultFormState = {
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

export const FormContext = createContext<FormContextInterface>(DefaultFormState)