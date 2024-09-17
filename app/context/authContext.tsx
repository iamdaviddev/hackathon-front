import { createContext, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = (props) => {

  const [user, setuser] = useState(GetTokenCookie(null) ? GetTokenCookie(null) : {
    name: "",
    id: "",
    email: "",
    status: false,
  })


  return <AuthContext.Provider value={{ user, setuser }}>{props.children}</AuthContext.Provider>
}