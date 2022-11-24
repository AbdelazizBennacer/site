import react from 'react'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'
import { AuthProvider } from './context/AuthContext'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import Header from './components/Header'
import SideBar from './components/SideBar'
import NotePage from './pages/NotePage'
import backtest from './pages/backtest'
function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Header/>
          
          <PrivateRoute component={HomePage} path="/" exact/>
          <Route component={LoginPage} path="/login"/>
          
          <Route path="/note/:id" component={NotePage} />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
