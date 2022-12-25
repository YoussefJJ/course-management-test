import React from 'react'


type SubmitProps = {
    children: React.ReactNode,
    onSubmit: (event: React.FormEvent<any>) => void
}

function Submit(props: SubmitProps) {
  return (
    <button 
    type='submit'
    onClick={props.onSubmit}
    className='btn bg-black text-white fw-bold rounded py-2 px-3' style={{
        width: '100%'
    }}>{props.children}</button>
  )
}


export default Submit