import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const LogoutBtn = () => {
  const { logout } = useAuth0()

  return <button onClick={() => logout(
    { returnTo: 'https://freshipes.shadowfire168.repl.co/' }
  )}>Logout</button>
}

export default LogoutBtn