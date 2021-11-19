import * as React from 'react';
import { Route } from 'react-router-dom';
import ForgotPassword from './screens/forgot-password/ForgotPassword';
import Home from './screens/home/Home';
import Login from './screens/login/Login';

export const routes = <div>
    <Route exact path='/' component={ Login } />
    <Route exact path='/login' component={ Login } />
    <Route exact path='/forgot-password' component={ ForgotPassword } />
    <Route exact path='/home' component={ Home } />
</div>;