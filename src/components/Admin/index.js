import React from 'react'
import { withAuthorization } from '../Session'

const Admin = () =>
  <div>
    <h1>Admin page</h1>
  </div>

const condition = authUser => !!authUser

export default withAuthorization(condition)(Admin)
