import { useContext } from "react";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import { InsertContext } from "../interface/InsertContext";
import { FormInterface } from "../interface/interface";

export default function Form(prop:FormInterface) {
  if(prop.isInsert) return <InsertForm/>
  return <InsertForm/>
}

function InsertForm(){
  const prop = useContext(InsertContext)
  
  return (
    <div className="flex flex-col items-center">
      <div className="text-2xl font-bold">Insert</div>
  
      <div className="p-5 grid grid-cols-2 justify-center gap-5 max-w-2xl">
        
        <CustomSelect option={prop.navbar} setter={prop.setNavbarInput!}/>
        <CustomSelect option={prop.navbarChild} setter={prop.setNavbarChildInput!}/>    
        <CustomInput type="text" placeholder="name" setter={prop.setName!}/>
        <CustomInput type="text" placeholder="address" setter={prop.setAddress!}/>
        <CustomInput type="number" placeholder="price" setter={prop.setPrice!}/>
  
        <input type="file" className="file-input file-input-bordered w-full max-w-xs" onChange={e => prop.setProfile!(e.target.files![0])} />
        
        <textarea className="textarea textarea-bordered" placeholder="description" onChange={e => prop.setDescription!(e.target.value)}></textarea>
        
        <button className="btn btn-neutral" onClick={prop.handleInsert!}>Insert</button>
  
      </div>
    </div>
  )
}