import React, { useState } from 'react'
import './Clock.css'

const Clock = () => {
    const [hour, setHour] = useState()
    const [minutes, setMinutes] = useState()
    const [seconds, setSeconds] = useState()
    const [toggleDisplay, setToggleDisplay] = useState(true)

    setInterval(() => {
        const date = new Date()
        setHour(date.getHours())
        setMinutes(date.getMinutes())
        setSeconds(date.getSeconds()) 
    })

    let display1 = `${hour > 12 ? hour - 12 : hour}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`
    let display2 = `${hour < 10 ? '0' + hour : hour}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`

    const toggler = () => {
        setToggleDisplay(!toggleDisplay)
    }

    let currDisplay
    if(toggleDisplay===true){
        currDisplay = display1
    } else {
        currDisplay = display2
    }

    let dayNight = hour >= 12 ? 'PM' : 'AM'

    let bg
    if(dayNight === 'AM'){
        bg = '57ffff'
    } else {
        bg = 'coral'
    }
  return (
    <div><p onClick={() => toggler()} className='clock'>{currDisplay} <span style={{color: bg}}>{dayNight}</span></p>
    
    <p className='rgb'><span></span></p></div>
  )
}

export default Clock