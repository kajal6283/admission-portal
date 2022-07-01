import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainRoute from "./views/components/MainRoute";
// import Login from './views/auth/Login';

const App = () => {
    return (
            <BrowserRouter>
                <Route>
                <MainRoute path="/" component={MainRoute}/>
                 {/* <AuthRoute path="/" name="login" component={Login}/> */}
                
                </Route>
            </BrowserRouter>  
    );
}

export default App;
