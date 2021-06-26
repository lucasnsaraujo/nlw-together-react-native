import React from 'react'

import { NavigationContainer } from '@react-navigation/native'

import App from './app.routes'
import { useAuth } from '../hooks/auth'
import SignIn from '../screens/SignIn'

export default function Routes() {
  const { user } = useAuth()

  return(
      <NavigationContainer>
        {user.id ? <App/> : <SignIn/>}
      </NavigationContainer>

  )
}