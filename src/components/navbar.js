import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function NavBar() {
  return (
    <div>
        <ul className="nav justify-content-between m-2 p-2">
            <div className="nav-left">
                <img src='/logo/dynamics.png' className='App-logo' alt="logo" />
            </div>
            <div className="nav nav-right">
                <li className="nav-item">
                    <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Services</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link"> Portfolio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About Us</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contact Us</a>
                </li>
            </div>
        </ul>
    </div>
  )
}
