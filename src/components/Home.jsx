import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {

    const arr=[1,2,3,4,5,];
    return (
        <div>
            <h1>Home</h1>
            <Link to="/login">Login</Link>

            {arr.map((a)=><p>{a}</p>)}
        </div>
    )
}
