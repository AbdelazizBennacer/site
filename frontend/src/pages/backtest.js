
/*
import React, {useState, useEffect, useContext} from 'react'
import AuthContext from '../context/AuthContext'
import AddButton from '../components/AddButton'
import ListItem from '../components/ListItem'
import SideBar from '../components/SideBar'
import { Link } from 'react-router-dom'

const Backtest = () => {
    let [notes, setNotes] = useState([])
    
    let {authTokens, logoutUser} = useContext(AuthContext)
    const [intervalId, setIntervalId] = useState(0);
    
    
    useEffect(()=> {
        
       
        
    }, [])


   
    let RunBack = async() =>{
      
                const histo = {"ibkr": 10}
                for (let i in histo){
                    const close = i.close,
                    volume = i.volume
                    if (position == 0 && 10>close>1 && volume > 100){
                        const posision = 1, 
                        buyprice = close,
                        target = close *1.06,
                        sl= close *0.97
                    } else if (position == 1 && close > target ){
                        const posision = 0, 
                        sellprice = close
                        
                        histoTrades = {buy : buyprice, sell :  sellprice}
                        fetch(`histoTrades`, {
                            method: "GET",
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization':'Bearer ' + String(authTokens.access)
                            },
                            body: JSON.stringify(histoTrades)
                        })
                    }else if (position == 1 && close < sl ){
                        const posision = 0, 
                        sellprice = close

                        histoTrades = {buy : buyprice, sell :  sellprice}
                        fetch(`histoTrades`, {
                            method: "GET",
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization':'Bearer ' + String(authTokens.access)
                            },
                            body: JSON.stringify(histoTrades)
                        })
                    

                }
                
            }
    return (
        <div className="notes">
            <SideBar/>
            <p>You are logged to the home page!</p>
            <button onClick={() => run()}>{intervalId ? "Stop" : "Start"}</button>
           
            <p className="notes-count">{notes.length}</p>
            <p className="notes-count"></p>
            <AddButton />
            <div className="notes-list">
                {notes.map((notee,index) => (
                    <ListItem key={index} note={notee} />
                  
                ))}
            </div>
            
        </div>
        
    )
}

export default Backtest 
*/