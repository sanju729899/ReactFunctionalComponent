import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import Counter from '../src/components/Counter'
import Counterfun from '../src/components/FunctionalCounter'
const Routing = () =>
(
    <Router>
        <div>
            <Route path="/funcounter" component={Counterfun} />
            <Route path="/counter" component={Counter} />
        </div>
    </Router>
)
export default Routing