import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Home() {
  return (
    <div>
        <h2>Welcome to Home Page</h2>
        <nav>
            <ul>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
                <li>
                    <Link to='/register'>Registartion</Link>
                </li>
                <li>
                    <Link to='/dashboard'>Dashboard</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </div>
  )
}

export default Home