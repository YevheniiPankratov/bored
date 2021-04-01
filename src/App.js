import React from 'react'
import Header from './Components/Header/Header'
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import { Route, BrowserRouter as Router,Switch } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import PreView from './Components/PreView/PreView'
import PrivateRoute from './Components/auth/PrivateRoute';
import Home from './Pages/Home/Home';
import ForgotPass from './Components/auth/ForgotPass';
import UpdateProfile from './Components/UpdateProfile/UpdateProfile';

export default function App() {
    return (
        <div>
        <Router>
            <Header/>
            <div className='home'>
            <AuthProvider>
                <Switch>
                    
                    <Route exact path='/' component={PreView}/>
                    <Route path='/signup' component={Signup}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/forgot-pass' component={ForgotPass}/>
                    <PrivateRoute path='/home' component={Home}/>
                    <PrivateRoute path='/update-profile' component={UpdateProfile}/>
                </Switch>
            </AuthProvider>
            </div>
            </Router>
            {/* <Footer/> */}
            </div>
    )
}
