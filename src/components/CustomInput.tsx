import { CustomInputInterface } from "../interface/interface";

export default function CustomInput(prop: CustomInputInterface) {
  const inputClass = prop.disabled ? 'bg-gray-200' : '';

  return (
    <label className={`input input-bordered flex items-center gap-2 ${inputClass}`}>
        <input
          disabled={prop.disabled ? prop.disabled : false}
          type={prop.type}
          value={prop.value}
          className={`grow ${inputClass}`}
          placeholder={prop.placeholder}
          onChange={e => prop.setter(e.target.value)}
        />
    </label>
  )
}
