import React, { useState, useEffect ,useContext} from 'react'
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import SideBar from '../components/SideBar'

const NotePage = ({ match, history }) => {

    let noteId = match.params.id
    let [note, setNote] = useState(null)
    let {authTokens, logoutUser} = useContext(AuthContext)
    useEffect(() => {
        getNote()
    }, [noteId])


    let getNote = async () => {
        if (noteId === 'new') return

        let response = await fetch(`http://127.0.0.1:8000/api/notes/${noteId}/`, {
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer ' + String(authTokens.access)
            }
        })
        let data = await response.json()

        if(response.status === 200){
            setNote(data)
        }else if(response.statusText === 'Unauthorized'){
            logoutUser()
        }
        
    }

    let createNote = async () => {
        fetch(`http://127.0.0.1:8000/api/notes/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization':'Bearer ' + String(authTokens.access)
            },
            body: JSON.stringify(note)
        })
    }


    let updateNote = async () => {
        fetch(`http://127.0.0.1:8000/api/notes/${noteId}/`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Authorization':'Bearer ' + String(authTokens.access)
            },
            body: JSON.stringify(note)
        })
    }


    let deleteNote = async () => {
        fetch(`http://127.0.0.1:8000/api/notes/${noteId}/`, {
            method: 'DELETE',
            'headers': {
                'Content-Type': 'application/json',
                'Authorization':'Bearer ' + String(authTokens.access)
            }
        })
        history.push('/')
    }

    let handleSubmit = () => {
        console.log('NOTE:', note)
        if (noteId !== 'new' && note.body == '') {
            deleteNote()
        } else if (noteId !== 'new') {
            updateNote()
        } else if (noteId === 'new' && note.body !== null && note.pattern !== null) {
            createNote()
        }
        history.push('/')
    }

    let handleChange = (value) => {
        setNote(note => ({ ...note, 'body': value }))
       
        console.log('Handle Change:', note)
    }
    let handleChangee = (value) => {
       
        setNote(note => ({ ...note, 'pattern': value }))
        console.log('Handle Change:', note)
    }

   
    
    return (
        <div className="note" >
        <SideBar/>
            <div className="note-header">
                <h3>
                    <ArrowLeft onClick={handleSubmit} />
                </h3>
                {noteId !== 'new' ? ( <button onClick={deleteNote}>Delete</button> ) : (<button onClick={handleSubmit}>Done</button> )}

            </div>
            <input onChange={(e) => { handleChange(e.target.value) }} value={note?.body}></input> <br></br>
            <input onChange={(i) => { handleChangee(i.target.value) }} value={note?.pattern}></input>
            
            
              
            
              
            
        </div>
    )
}

export default NotePage
