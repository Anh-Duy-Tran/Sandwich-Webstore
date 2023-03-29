type OrderStatus = "ordered" | "received" | "inQueue" | "ready" | "failed";

type BreadType = "oat" | "rye" | "wheat"

interface Topping {
  id: string
}

export interface Sandwich {
  id_: string;
  name: string;
  price: number;
  image: URL;
  description: string;
  toppings: Array<Topping>;
  breadType: BreadType;
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
        ...state
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

