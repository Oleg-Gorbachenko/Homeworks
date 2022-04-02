import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import styles from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        // stop
        window.clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())  // setDate
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const addZero = (num: number) => {
        if (num >= 0 && num <= 9) {
            return '0' + num
        } else return num
    }

    const stringTime = `${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())}`
    const stringDate = `${addZero(date.getDate())}.${addZero(date.getMonth() + 1)}.${date.getFullYear()}`

    return (
        <div>
            <div className={styles.clock}
                 onMouseEnter={onMouseEnter}
                 onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show ? (
                <div className={styles.date}>
                    {stringDate}
                </div>
            ) : <div className={styles.emptyDiv}></div>}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
