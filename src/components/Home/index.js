import React from 'react'
import TimeContainer from '../TimeContainer'
import '../../styles/main.css'

function Home(){
  const now = new Date()
  const endDate = now.setDate(now.getDate() + 3)
  return(
    <main className="main">
      <div className="main-content">
        <TimeContainer endDate={endDate}/>
      </div>
    </main>
  )
}

export default Home