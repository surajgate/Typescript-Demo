import React from 'react'

type Props = {
    name: string
    
}

export default function Props(props: Props) {
  return (
    <div>This is {props.name} ! </div>
  )
}
