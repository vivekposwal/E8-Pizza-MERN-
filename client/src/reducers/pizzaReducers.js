import {
  GET_PIZZAS_REQUEST,
  GET_PIZZAS_SUCCESS,
  GET_PIZZAS_FAILED,
} from "../constants/pizzaConstants";
export const getAllPizzasReducer = (state = { pizzas: [] }, action) => {
  switch (action.type) {
    case GET_PIZZAS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_PIZZAS_SUCCESS:
      return {
        pizzas: action.payload,
        loading: false,
      };
    case GET_PIZZAS_FAILED:
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
