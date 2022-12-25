import React from 'react'

type TitleProps = {
    children: React.ReactNode
}

function Title(props: TitleProps) {
  return (
    <h1 className='mx-auto my-3'>{props.children}</h1>
  )
}

export default Title