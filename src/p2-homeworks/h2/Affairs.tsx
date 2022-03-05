import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'

type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: (value: FilterType) => void
    deleteAffairCallback: (arg0: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a.name}
            deleteAffairCallback={props.deleteAffairCallback}
            _id={a._id}
            priority={a.priority}
        />
    ))


    const onClickButtonHandler = (value: FilterType) => {
        props.setFilter(value)
    }

    return (
        <div className={s.someClass}>

            {mappedAffairs}

            <button className={props.filter === 'all' ? s.buttonActive : s.button}
                    onClick={() => onClickButtonHandler('all')}>All
            </button>
            <button className={props.filter === 'high' ? s.buttonActive : s.button}
                    onClick={() => onClickButtonHandler('high')}>High
            </button>
            <button className={props.filter === 'middle' ? s.buttonActive : s.button}
                    onClick={() => onClickButtonHandler('middle')}>Middle
            </button>
            <button className={props.filter === 'low' ? s.buttonActive : s.button}
                    onClick={() => onClickButtonHandler('low')}>Low
            </button>
        </div>
    )
}

export default Affairs
