import { createContext, useEffect, useReducer } from "react";
import { reducer, initialState, StoreStateType, Action } from "./reducer";
import sandwiches from '../static/sandwiches.json';

interface StoreContextValue {
  state: StoreStateType;
  dispatch: React.Dispatch<Action>;
}

export const StoreContext = createContext<StoreContextValue>({ state: initialState, dispatch: () => {}});

interface Props {
  children: React.ReactNode;
}

export const StoreProvider : React.FC<Props> = ({children}: { children?: React.ReactNode }) => {
  
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "set-sandwiches", payload : sandwiches });
  }, [])

  return (
    <StoreContext.Provider value={{state, dispatch}}>
    { children }
    </StoreContext.Provider>                   
  )
}