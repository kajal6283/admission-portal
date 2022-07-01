import React from 'react'
import {Route} from 'react-router-dom';
import Admission from '../main/admission/Admission';


const AuthRoute = ({component: Component}) => {
    return (
        <Route
            render={props => (
                <div className="auth-screen">
                    <Route exact path="/" component={Admission}/>  
                </div>
            )}
        />
    )
};
export default AuthRoute;