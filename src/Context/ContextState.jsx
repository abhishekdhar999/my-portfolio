import React, { useState } from 'react'
import Context from './ContextProvider'
export default function ContextState(props) {
    const [isClicked,setIsClicked] =  useState(false);
  return (
    
      <Context.Provider value={{isClicked,setIsClicked}}>{props.children} </Context.Provider>
    
  )
}
