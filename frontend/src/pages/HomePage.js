import React, {useState, useEffect, useContext} from 'react'
import AuthContext from '../context/AuthContext'
import AddButton from '../components/AddButton'
import ListItem from '../components/ListItem'
import SideBar from '../components/SideBar'


const HomePage = () => {
    let [notes, setNotes] = useState([])
    
    let {authTokens, logoutUser} = useContext(AuthContext)
    const [intervalId, setIntervalId] = useState(0);
    
    
    useEffect(()=> {
        getNotes()
       
        const interval = setInterval(() => {
            console.log('This will be called every 2 seconds');
          }, 222000);
        
          return () => clearInterval(interval);
    }, [] )


    let getNotes = async() =>{
        let response = await fetch('http://127.0.0.1:8000/api/notes/', {
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer ' + String(authTokens.access)
            }
        })
        let data = await response.json()

        if(response.status === 200){
            setNotes(data)
        }else if(response.statusText === 'Unauthorized'){
            logoutUser()
        }
        
    }
    let RunBot = async() =>{
      
        let Buy = async() =>{
    
            let response =  await fetch('http://127.0.0.1:8000/api/live/', {
                method:'GET'})
            let j =  await response.json()
          
            let h = JSON.parse(j["0"]["body"])
            
           
            for (let i in h ){
                let last = h[i]["0"]["price"]
                let vol = h[i]["0"]["vol"]
            console.log(vol,'Handle Change:', last )
            }
            //let dd = j["Time Series (5min)"]
            
            //const products = ['orange', 'apple', 'watermelon'];
           
          /*
            fetch(`LiveData`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':'Bearer ' + String(authTokens.access)
                },
                body: JSON.stringify('TradeInfo')
            })
            */ 
            
            const data = {price : 10 , ema : 9 , sma : 8}
            var position = {state : 0 }
            const price = data.price,
            EMA = data.ema,
            SMA = data.sma,
            state =position.state
            
            if (state === 0 && price > EMA ){
                
                console.log(price)
            }
            
            /*
            for (let i in data) {
            //for (let i = 0; i < products.length; i++) {
                
                    //for (let i = 0; i < products.length; i++) {
    
                        console.log('Handle Change:',parseFloat(dd[i]["4. close"]),i)
                        
                      
                
              }  
              */
              
         
        }
        let Sell = () =>{
            /*
                    fetch(`position`, {
                        method: "GET",
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization':'Bearer ' + String(authTokens.access)
                        },
                        body: JSON.stringify(TradeInfo)
                    })
                    */
                    const data = {price : 13 , target : 12 , sl : 9}
                    var position = {state : 1 }
    
                    const BuyPrice = data.price,
                    price = data.price,
                    Target = data.target,
                    StopLoss = data.sl,
                    state = position.state
                    
    
                    if (state === 1 && price > Target ){
                        
                        console.log("+2R")
                        /*
                        fetch(`trades`, {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization':'Bearer ' + String(authTokens.access)
                        },
                        body: JSON.stringify({ BuyPrice : BuyPrice })
                    })
                   
                        fetch(`position`, {
                            method: "PUT",
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization':'Bearer ' + String(authTokens.access)
                            },
                            body: JSON.stringify({state : 0})
                        })
                    */
                    } else if (state === 1 && price < StopLoss) {
                        console.log("-1R")
                       /*
                        fetch(`trades`, {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization':'Bearer ' + String(authTokens.access)
                        },
                        body: JSON.stringify({ BuyPrice : BuyPrice })
                    })
    
                        fetch(`position`, {
                            method: "PUT",
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization':'Bearer ' + String(authTokens.access)
                            },
                            body: JSON.stringify({state : 0})
                        })
                        */
                     
                 
                }
            }
            Buy()
           Sell()
        }
    let fun = (x) => {
        const products = ['orange', 'apple', 'watermelon'];
       
        for (let i in products) {
        //for (let i = 0; i < products.length; i++) {
            console.log('Handle Change:',products[i])
            
          }  
        console.log(x)
       /* if (10 === 10 && 1 == 1) {
            for (let i = 0; i < 1; i++) {
                console.log('Handle Change:',x)
                
              }
        
        }*/
    }
    let run = () => {
        var x =1
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(0);
            return;
          }
      
        const newIntervalId =   setInterval(() => {
                    fun(x);
                  }, 1000);
              
        setIntervalId(newIntervalId);
    
    }

  //  let ff = () => {
        
    //} <button onClick={() => ff()}>ff</button>
   
    return (
        <div className="notes">
            <SideBar/>
            <p>You are logged to the home page!</p>
            <button onClick={() => RunBot()}>{intervalId ? "Stop" : "Start"}</button>
           
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

export default HomePage
