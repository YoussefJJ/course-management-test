import React from "react"

type InputProps = {
    label: string,
    children: React.ReactNode,
    placeholder?: string,
    name: string,
    type: string,
    id?: string,
    value?: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function Input(props: InputProps) {
  return (
    <div className="form-group my-md-3">
        <label htmlFor={props.id}>{props.children}</label>
        <input 
        onChange={props.onChange} 
        type={props.type || "text"} 
        className='form-control' 
        name={props.name} 
        value={props.value}
        id={props.id} 
        placeholder={props.placeholder}/>
    </div>
  )
}

export default Input