import React, {useState} from 'react'
import {v1} from 'uuid'
import GreetingContainer from './GreetingContainer'


export type UserType = {
    _id: string
    name: string
}

function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([])

    const addUserCallback = (name: string) => {
        let newName = {_id: v1(), name: name};
        setUsers([newName, ...users])
    }

    return (
        <div>
            <hr/>
            homeworks 3


            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            <hr/>
        </div>
    )
}

export default HW3
