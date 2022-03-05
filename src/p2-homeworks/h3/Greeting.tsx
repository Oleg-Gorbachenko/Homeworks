import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // fixed
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // fixed
    addUser: () => void // fixed
    error: string // fixed
    totalUsers: number // fixed
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    let inputClass = error ? s.errorInput : s.input  //fixed

    return (
        <div className={s.greeting}>
            <div>
                <input value={name}
                       onChange={setNameCallback}
                       className={inputClass}/>
                <div className={s.error}>{error}</div>
            </div>
            <button className={s.button} onClick={addUser}>add</button>
            <div className={s.count}>{totalUsers}</div>

        </div>
    )
}

export default Greeting
