import React from 'react'
import Header from './Components/Header/Header'
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import { Route, BrowserRouter as Router,Switch } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import PreView from './Components/PreView/PreView'

export default function App() {
    return (
        <div>
        <Router>
            <div className="App">
            <Header/>
            <div className='home'>
            <AuthProvider>
                <Switch>
                    <Route exact path='/' component={PreView}/>
                    <Route path='/signup' component={Signup}/>
                    <Route path='/login' component={Login}/>
                </Switch>
            </AuthProvider>
            </div>
            </div>
            </Router>
            {/* <Footer/> */}
            </div>
    )
}
