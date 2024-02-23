import { useContext } from "react";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import { FormInterface } from "../interface/interface";
import { FormContext } from "../interface/FormContext";

export default function Form(prop:FormInterface) {
  if(prop.isInsert) return <InsertForm/>
  return <UpdateForm/>
}

function InsertForm(){
  const formContext = useContext(FormContext)
  
  return (
    <div className="flex flex-col items-center">
      <div className="text-2xl font-bold">Insert</div>
  
      <div className="p-5 grid grid-cols-2 justify-center gap-5 max-w-2xl">
        
        <CustomSelect option={formContext.navbar} setter={formContext.setNavbarInput!}/>
        <CustomSelect option={formContext.navbarChild} setter={formContext.setNavbarChildInput!}/>    
        <CustomInput value={formContext.name} type="text" placeholder="name" setter={formContext.setName!}/>
        <CustomInput value={formContext.address} type="text" placeholder="address" setter={formContext.setAddress!}/>
        <CustomInput value={formContext.price} type="number" placeholder="price" setter={formContext.setPrice!}/>
  
        <input type="file" className="file-input file-input-bordered w-full max-w-xs" onChange={e => formContext.setProfile!(e.target.files![0])} />
        
        <textarea className="textarea textarea-bordered" placeholder="description" onChange={e => formContext.setDescription!(e.target.value)}></textarea>
        
        <button className="btn btn-neutral" onClick={formContext.handleSubmit!}>Insert</button>
  
      </div>
    </div>
  )
}

function UpdateForm(){
  const formContext = useContext(FormContext)
  
  return (
    <div className="flex flex-col items-center">
      <div className="text-2xl font-bold">Update</div>
  
      <div className="p-5 grid grid-cols-2 justify-center gap-5 max-w-2xl">
        
        <CustomInput disabled value={formContext.navbarInput} type="text" placeholder="Navigation" setter={formContext.setNavbarInput!}/>
        <CustomInput disabled value={formContext.navbarChildInput} type="text" placeholder="Navigation Child" setter={formContext.setNavbarChildInput!}/>
        <CustomInput value={formContext.name} type="text" placeholder="name" setter={formContext.setName!}/>
        <CustomInput value={formContext.address} type="text" placeholder="address" setter={formContext.setAddress!}/>
        <CustomInput value={formContext.price} type="number" placeholder="price" setter={formContext.setPrice!}/>
  
        <input type="file" className="file-input file-input-bordered w-full max-w-xs" onChange={e => formContext.setProfile!(e.target.files![0])} />
        
        <textarea value={formContext.description} className="textarea textarea-bordered" placeholder="description" onChange={e => formContext.setDescription!(e.target.value)}></textarea>
        
        <button className="btn btn-neutral" onClick={formContext.handleSubmit!}>update</button>
  
      </div>
    </div>
  )
}