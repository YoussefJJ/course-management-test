import React from 'react'

type ContainerProps = {
    children: React.ReactNode
}

function Container(props: ContainerProps) {
  return (
    <div className='my-5 mx-auto' style={{
        width: '500px'
    }}>{props.children}</div>
  )
}

export default Container