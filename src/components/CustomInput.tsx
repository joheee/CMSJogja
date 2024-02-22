import { CustomInputInterface } from "../interface/interface";

export default function CustomInput(prop:CustomInputInterface) {
  return (
    
    <label className="input input-bordered flex items-center gap-2">
        <input type={prop.type} className="grow" placeholder={prop.placeholder} onChange={e => prop.setter(e.target.value)}/>
    </label>
  )
}