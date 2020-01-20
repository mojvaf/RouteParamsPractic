import React from 'react'
import screen from "../images/res.jpg"
export default function Home() {
    return (
        <>
            
            <div className="card" style={{ width: "19rem" }}>
                <img src={screen} alt="A screen" width="300px" height="auto" />      
               
            </div>
            <p>Welcome to the our iMenu. You can order your food from
                office and when you get home your dinner is ready and warm.</p>
             
        </>
    )
}
