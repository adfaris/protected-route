import React from 'react'
import { withAuthorization } from '../Session'
import * as  ROLES from '../../constants/roles'

const Admin = () =>
  <div>
    <h1>Admin page</h1>
    <p>
      Ristricted area! only users with admin role are authorized
    </p>
  </div>

const condition = authUser => authUser && authUser.roles.includes(ROLES.Admin)

export default withAuthorization(condition)(Admin)
