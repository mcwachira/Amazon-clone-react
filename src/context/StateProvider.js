import React, { createContext, useContext, useReducer } from "react"


//prepared the data layer 
export const StateContext = createContext();


//wrap our app and provide data layer to all our components 
export const StateProvider = ({ reducer, InitialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, InitialState)}>
      {children}

    </StateContext.Provider>
  )
}


//get information from  our data layer
export const useStateValue = () => useContext(StateContext)//You forgot to return your code 