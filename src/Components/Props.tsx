import React from 'react'

type PersonList = {
    names: {
        first: string
        last: string
    }[]
}


export default function Props(props: PersonList) {
    return (
        <>
            <div>HEY {props.names.map(name => {
                return (
                    <h5 key={name.first}> 
                        {name.first} {name.last}
                    </h5>
                )
            })}
            </div>
        </>
    )
}
