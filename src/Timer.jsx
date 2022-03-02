import {useEffect, useState} from 'react'
import './timer.scss'

const COUNTDOWN_INITIAL_TIME_IN_SECONDS = 25 * 60 // 25 minutes

export default function () {
    const [secondsAmount, setSecondsAmount] = useState(COUNTDOWN_INITIAL_TIME_IN_SECONDS)

    useEffect(() => {
        if (secondsAmount === 0) return

        setTimeout(() => {
            setSecondsAmount(state => state - 1)
        }, 1000)
    }, [secondsAmount])

    const minutes = Math.floor(secondsAmount / 60)
    const seconds = secondsAmount % 60

    return (
        <div className='wrapper'>
            <div className='timer'>
                <div className='numbers'>
                    {String(minutes).padStart(2, '0').split('').map(number => <span className='number'>{number}</span>)}
                </div>
                <div className='dots'>
                    <span/>
                    <span/>
                </div>
                <div className='numbers'>
                    {String(seconds).padStart(2, '0').split('').map(number => <span className='number'>{number}</span>)}
                </div>
            </div>
        </div>
    )
}