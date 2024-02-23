import { useContext } from "react";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import { FormInterface } from "../interface/interface";
import { FormContext } from "../interface/FormContext";

export default function Form(prop:FormInterface) {
  if(prop.isInsert) return <InsertForm/>
  return <UpdarteForm/>
}

function InsertForm(){
  const propContext = useContext(FormContext)
  
  return (
    <div className="flex flex-col items-center">
      <div className="text-2xl font-bold">Insert</div>
  
      <div className="p-5 grid grid-cols-2 justify-center gap-5 max-w-2xl">
        
        <CustomSelect option={propContext.navbar} setter={propContext.setNavbarInput!}/>
        <CustomSelect option={propContext.navbarChild} setter={propContext.setNavbarChildInput!}/>    
        <CustomInput type="text" placeholder="name" setter={propContext.setName!}/>
        <CustomInput type="text" placeholder="address" setter={propContext.setAddress!}/>
        <CustomInput type="number" placeholder="price" setter={propContext.setPrice!}/>
  
        <input type="file" className="file-input file-input-bordered w-full max-w-xs" onChange={e => propContext.setProfile!(e.target.files![0])} />
        
        <textarea className="textarea textarea-bordered" placeholder="description" onChange={e => propContext.setDescription!(e.target.value)}></textarea>
        
        <button className="btn btn-neutral" onClick={propContext.handleInsert!}>Insert</button>
  
      </div>
    </div>
  )
}

function UpdarteForm(){
  const propContext = useContext(FormContext)
  
  return (
    <div className="flex flex-col items-center">
      <div className="text-2xl font-bold">Update</div>
  
      <div className="p-5 grid grid-cols-2 justify-center gap-5 max-w-2xl">
        
        <CustomSelect option={propContext.navbar} setter={propContext.setNavbarInput!}/>
        <CustomSelect option={propContext.navbarChild} setter={propContext.setNavbarChildInput!}/>    
        <CustomInput type="text" placeholder="name" setter={propContext.setName!}/>
        <CustomInput type="text" placeholder="address" setter={propContext.setAddress!}/>
        <CustomInput type="number" placeholder="price" setter={propContext.setPrice!}/>
  
        <input type="file" className="file-input file-input-bordered w-full max-w-xs" onChange={e => propContext.setProfile!(e.target.files![0])} />
        
        <textarea className="textarea textarea-bordered" placeholder="description" onChange={e => propContext.setDescription!(e.target.value)}></textarea>
        
        <button className="btn btn-neutral" onClick={propContext.handleInsert!}>update</button>
  
      </div>
    </div>
  )
}