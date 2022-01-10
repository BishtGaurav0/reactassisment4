import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <div>
            <div className='header'>
                <Link exact to='/home'  className='headers'>HOME PAGE</Link>
                <Link exact to='/students' className='headers'>STUDENTS</Link>
                <Link exact to='/contact'  className='headers'>CONTACT US</Link>
            </div>
        </div>
    )
}

export default Header