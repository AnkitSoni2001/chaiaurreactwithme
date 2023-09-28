import React from 'react'
import { useState } from "react"
import '../04backGroundChange/backGroundChange.css'
function BackGroundChange() {


    const [color, setColor] = useState("olive")

    
    return (
        <div className='backGround' style={{backgroundColor: color}}>
            <div className='buttons'>
                <button onClick={() => setColor("red")} className='red'>Red</button>
                <button onClick={() => setColor("green")} className='green'>Green</button>
                <button onClick={() => setColor("blue")} className='blue'>Blue</button>
                <button onClick={() => setColor("pink")} className='pink'>Pink</button>
            </div>
        </div>
    )
}

export default BackGroundChange