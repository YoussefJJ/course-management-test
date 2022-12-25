import React from 'react'

type RadioProps = {
    children: React.ReactNode,
    name: string,
    value: string,
    id: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function Radio(props: RadioProps) {
  return (
    <div className="form-check">
        <input onChange={props.onChange} id={props.id} className="form-check-input" type="radio" name={props.name} value={props.value}/>
        <label className="form-check-label" htmlFor={props.name}>
            {props.children}
        </label>
    </div>
  )
}

export default Radio