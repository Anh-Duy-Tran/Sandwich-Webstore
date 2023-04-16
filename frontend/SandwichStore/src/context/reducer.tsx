type OrderStatus = "ordered" | "received" | "inQueue" | "ready" | "failed";

interface Topping {
  id: string;
  [extraProps: string]: any; // Define an indexer for extra properties
}

export interface Sandwich {
  _id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  toppings: Array<Topping>;
  breadType: string;
}

export interface User {
  name : string;
  role : "customer" | "admin";
}

export type Action = 
  | { type: "set-sandwiches", payload: Sandwich[] }
  | { type: "open-login" }
  | { type: "close-login" }
  | { type : "login-failed", payload : string }
  | { type : "set-snackbar-message", payload : string }
  | { type : "clear-login-message" }
  | { type : "close-snackbar" }
  | { type : "set-user", payload : User | null }

export const reducer = (
  state: StoreStateType,
  action: Action
) : StoreStateType => {

  switch (action.type) {
    case "set-sandwiches": {
      return {
        ...state,
        sandwiches: [ ...action.payload ]
      }
    }

    case "open-login" : {
      return {
        ...state,
        openLogin : true
      }
    }

    case "close-login" : {
      return {
        ...state,
        openLogin : false
      }
    }

    case "clear-login-message" : {
      return {
        ...state,
        loginMessage: null
      }
    }

    case "login-failed" : {
      return {
        ...state,
        loginMessage : action.payload
      }
    }

    case "set-snackbar-message" : {
      return {
        ...state,
        snackOpen: true,
        snackMessage: action.payload
      }
    }

    case "close-snackbar" : {
      return {
        ...state,
        snackOpen: false
      }
    }

    case "set-user" : {
      return {
        ...state,
        user : action.payload
      }
    }

    default:
      return {
        ...state
      }
  }
}

export interface StoreStateType {
  openLogin: boolean;
  sandwiches : Array<Sandwich>;
  loginMessage : string | null;
  username : string | null;
  snackOpen : boolean;
  snackMessage : string;
  user : User | null;
}

export const initialState: StoreStateType = {
  openLogin: false,
  sandwiches: [],
  loginMessage : null,
  username: null,
  snackOpen: false,
  snackMessage : "",
  user: null
}

