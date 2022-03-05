import React from 'react'
import s from './Affairs.module.css'

type AffairPropsType = {
    affair: string
    deleteAffairCallback: (_id: number) => void
    _id: number
    priority: string
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props._id)
    }


    const finalStyleFunction = () => {
        if (props.priority === 'high') {
            return s.highPriority
        } else if (props.priority === 'middle') {
            return s.middlePriority
        } else if (props.priority === 'low') {
            return s.lowPriority
        }
    }
    let finalStyle = finalStyleFunction()

    return (
        <div className={s.affairWrapper}>
            <div>
                <button className={s.button} onClick={deleteCallback}>X</button>
            </div>
            <div>{props.affair}</div>
            <div className={finalStyle}>{props.priority}</div>
        </div>
    )
}

export default Affair
