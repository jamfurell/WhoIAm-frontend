import React from 'react'
import { Switch, Route } from 'react-router-dom'

import MasterForm from '../MasterForm'
import Home from '../pages/Home'
import Question from '../components/Question'

const Routes =() =>{

return (
    <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/test/:id' component={Question}/>
        <Route path='/test' component={MasterForm} />

    </Switch>
    )
}

export default Routes