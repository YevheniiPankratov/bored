import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import { Route, BrowserRouter as Router,Switch, Redirect } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import PreView from './Components/PreView/PreView'
import PrivateRoute from './Components/auth/PrivateRoute';
import ForgotPass from './Components/auth/ForgotPass';
import UpdateProfile from './Components/UpdateProfile/UpdateProfile';
import ResultTest from './Test/ResultTest/ResultTest';
import RecomendTest from './Test/RecomendTest/RecomendTest';

export default function App() {
    return (
        <div>
        <Router>
            <AuthProvider>
            <Header/>
            <div className='home'>     
                <Switch>
                    <Route exact path='/' component={PreView}/>
                    <Route path='/signup' component={Signup}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/forgot-pass' component={ForgotPass}/>
                    <PrivateRoute path='/rt' component={ResultTest}/>
                    <PrivateRoute path='/recomend-test' component={RecomendTest}/>
                    <PrivateRoute path='/update-profile' component={UpdateProfile}/>
                    <Redirect to="/"/>
                </Switch>
                </div>
            </AuthProvider> 
            </Router>
            <Footer/>
            </div>
    )
}
