import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const Header = () => {
    let {user, logoutUser} = useContext(AuthContext)
    return (
        <div className="app-side">
            <Link to={`/note/4`} >Config</Link><br></br>
            <Link to="/" >Trades</Link><br></br>
            <p  onClick={logoutUser}>Logout</p>
        </div>
    )
}

export default Header
