import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import { Home, Login, Products, Register, Cart } from '../containers'
import PrivateRoute from './private-route'

function Routes() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={Register} path="/cadastro" />
        <PrivateRoute exact component={Home} path="/" />
        <PrivateRoute component={Products} path="/produtos" />
        <PrivateRoute component={Cart} path="/carrinho" />
      </Switch>
    </Router>
  )
}

export default Routes
