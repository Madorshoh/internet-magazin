import React,{createContext, useEffect} from  'react'
import { useState } from 'react'


export const MyContext = createContext() 

const Search = (props) => {

  const [word ,setWord] = useState("")
  const [search,setSearch] = useState(false)

  useEffect (()=>{
    if (word !== "") {
      setSearch(true)
    }
  },[word])


  return (
    <MyContext.Provider value={{
      word,search,setSearch,setWord
    }}>
      {props.children}
    </MyContext.Provider>
  )
}

export default Search
