import React, { createContext, useContext, useReducer } from "react";

// Prepares the data layer
export const StateContext = createContext();

// To wrap the app to provide data to every component
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// returns state and the dispatch function
// dispatch function takes the details about the type, data
export const useStateValue = () => useContext(StateContext);
