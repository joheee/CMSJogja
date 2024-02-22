import { CustomSelectInterface } from "../interface/interface";

export default function CustomSelect(prop:CustomSelectInterface) {
  return (
    <select className="select select-bordered w-full max-w-xs" onChange={e => prop.setter(e.target.value)}>
        {
            prop.option.map((item,i) => (
                <option value={item} key={i}>{item}</option>
            ))
        }
    </select>
  )
}