type OrderStatus = "ordered" | "received" | "inQueue" | "ready" | "failed";

interface Topping {
  id: string;
  [extraProps: string]: any; // Define an indexer for extra properties
}

export interface Sandwich {
  id_: string;
  name: string;
  price: number;
  image: string;
  description: string;
  toppings: Array<Topping>;
  breadType: string;
}

export type Action = 
  | { type: "set-sandwiches", payload: Sandwich[] }
  | { type: "open-login" }
  | { type: "close-login" }

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

    default:
      return {
        ...state
      }
  }
}

export interface StoreStateType {
  openLogin: boolean;
  sandwiches : Array<Sandwich>;

}

export const initialState: StoreStateType = {
  openLogin: false,
  sandwiches: []
}

