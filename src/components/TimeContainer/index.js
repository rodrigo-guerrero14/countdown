import React, {useState} from 'react'
import Time from '../Time'
import getTimeRemaining from '../../helper/getTimeRemaining'
import '../../styles/time.css'

function TimeContainer() {
  const endDate = 'December 27 2021 10:10:00 GMT+0400'
  let t = getTimeRemaining(endDate)
  const [seconds, setSeconds] = useState(t.seconds)
  const [minutes, setMinutes] = useState(t.minutes)
  const [hours, setHours] = useState(t.hours)
  const [days, setDays] = useState(t.days)

  setInterval(()=> {
    t = getTimeRemaining(endDate)
    setSeconds(t.seconds)
    setMinutes(t.minutes)
    setHours(t.hours)
    setDays(t.days)
  }, 1000)

  return (
    <div className="time-container">
      <Time time={days} title={'Días'}/>
      <Time time={hours} title={'Horas'}/>
      <Time time={minutes} title={'Minutos'}/>
      <Time time={seconds} title={'Segundos'}/>
    </div>
  )
}

export default TimeContainer