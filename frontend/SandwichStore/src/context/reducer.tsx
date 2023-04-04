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
  { type: "set-sandwiches", payload: Sandwich[] }

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

    default:
      return {
        ...state
      }
  }
}

export interface StoreStateType {
  sandwiches : Array<Sandwich>;

}

export const initialState: StoreStateType = {
  sandwiches: []
}

