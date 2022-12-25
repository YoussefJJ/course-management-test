import React from 'react'

type FormProps = {
    children: React.ReactNode
}

function Form(props: FormProps) {
  return (
    <form className=''>
        {props.children}
    </form>
  )
}

export default Form