import React from 'react'
import { Router } from '@reach/router'
import { login } from '../utils/auth'

const Settings = () => <p>Settings</p>
const Billing = () => <p>Billing</p>
const Home = () => <p>Home</p>

const Account = () => {
    login();

    return(
    <Router>
        <Settings path="/account/settings" />
        <Billing path="/account/billing" />
        <Home  path="/account/" />

    </Router>
)};

export default Account