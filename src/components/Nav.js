import React from 'react'
import {NavLink} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css";

export default function NavBar() {
    return (
        <nav className='container-fluid nav justify-content-center '>
            
            < ul className="nav nav-tabs">
                <li>
                    <NavLink className='nav-link active' to='/'  exact activeClassName='active'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink className='nav-link active'to='/new' activeClassName='active'>
                        New Question
                    </NavLink>
                </li>
                <li>
                    <NavLink className='nav-link active' to='/leader' activeClassName='active'>
                        Leader Board
                    </NavLink>
                </li>
            </ul>
                <li  className='nav justify-content-end ms-2 mt-2' >
                    Hello, 
                    <a href="#"> Sign out</a>
                </li>   
        </nav>

        // <ul className='nav nav-tabs'>
        //     <li>
        //         <a className='nav-link active' aria-current='page' href="#">Active</a>
        //     </li>
        //     <li className="nav-item">
        //         <a className="nav-link" href="#">Link</a>
        //     </li>
        //     <li className="nav-item">
        //         <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        //     </li>
        // </ul>
    )
}
