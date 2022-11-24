import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as AddIcon } from '../assets/add.svg'


const DeletButton = () => {
    return (
        <Link to="/note/new" >
            <AddIcon />
        </Link>
    )
}

export default DeletButton
