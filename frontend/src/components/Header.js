import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const Header = () => {
    let {user, logoutUser} = useContext(AuthContext)
    return (
        <div className="app-header">
            <Link to="/" >Backtrader</Link>
            
           
            {user &&   <p> {user.username}</p>}
           
        </div>
    )
}

export default Header
