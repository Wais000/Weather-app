import MyContext from './MyContext'
import { useState } from 'react'

const MyProvider = ({children}) => {

    const [search,setSearch]=useState("")


  return (
    <MyContext.Provider value={{search,setSearch} } >
    
        {children}
    
    </MyContext.Provider>

  )
}

export default MyProvider