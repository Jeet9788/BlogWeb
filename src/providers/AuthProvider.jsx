"use client"

import { SessionProvider} from "../../node_modules/next-auth/react"

export const AuthProvider = ({children}) => {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}


export default AuthProvider