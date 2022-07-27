import { createContext, useContext } from "react";

// creates state context
export const StateContext = createContext();

// global state hook that allows us to provides global state in any component
export const useGlobalState = () => useContext(StateContext);
