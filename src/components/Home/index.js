import React from 'react'
import { withAuthorization } from '../Session'

const HomePage = () =>
  <div>
    <h1>Home page</h1>
  </div>

const condition = authUser => !!authUser

export default withAuthorization(HomePage)(condition)
