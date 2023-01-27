import React, { useState, useContext, useEffect } from 'react'
const fetchContext = React.createContext()
const fetch2Context = React.createContext()

export function usefetchContext(){
    return useContext(fetchContext)
}
export function use2fetchContext(){
    return useContext(fetch2Context)
}


export function UserProvider({children}) {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
          .then(response => response.json())
          .then(data => setData(data));
      }, []);

      const [data2, setData2] = useState([]);
      useEffect(() => {
          fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data2 => setData2(data2));
        }, []);

  return (
        <fetchContext.Provider value={data}>
            <fetch2Context.Provider value={data2}>
                {children}
            </fetch2Context.Provider>
        </fetchContext.Provider>
  )
}
export default UserProvider