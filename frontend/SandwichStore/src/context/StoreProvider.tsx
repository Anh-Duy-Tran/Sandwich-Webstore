import { createContext, useEffect, useReducer } from "react";
import { reducer, initialState, StoreStateType, Action } from "./reducer";
import sandwiches from '../static/sandwiches.json';
import { Cookies } from "typescript-cookie";
import service from "../services/login";
import jwtDecode from "jwt-decode";
import { decodeToken } from "../utils/login";

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

  const validateCurrentToken = async () => {
    const token = Cookies.get('accessToken')?.toString();
    if (!token || token == undefined)
    {
      return;
    }
    if (await service.validateToken(token))
    {
      return dispatch({ type: "set-user", payload: decodeToken(token) });
    } 
    return Cookies.remove('accessToken');
  }

  useEffect(() => {
    validateCurrentToken();
    dispatch({ type: "set-sandwiches", payload : sandwiches });
  }, [])

  return (
    <StoreContext.Provider value={{state, dispatch}}>
    { children }
    </StoreContext.Provider>                   
  )
}