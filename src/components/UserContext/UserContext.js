import React, { createContext,useState } from 'react'

   export const UserContext = createContext();
export default function UserProvider(props) {
    const [users, setUser] = useState([
      { id: 1, name: "Salman", position: "Front End Dev", salary: 28000 },
      { id: 2, name: "Shuvo", position: "Data Scientist", salary: 26000 },
     
    ]);
 
    return (
        <UserContext.Provider value={[users, setUser]}>
            {props.children}
      </UserContext.Provider>
    
  )
}
