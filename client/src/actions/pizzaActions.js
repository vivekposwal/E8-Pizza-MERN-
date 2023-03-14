import {
  GET_PIZZAS_REQUEST,
  GET_PIZZAS_SUCCESS,
  GET_PIZZAS_FAILED,
} from "../constants/pizzaConstants";
import axios from "axios";
export const getAllPizzas = () => async (dispatch, getState) => {
  dispatch({ type: GET_PIZZAS_REQUEST });
  try {
    const response = await axios.get(`/api/pizzas/getAllPizzas`);
    console.log(response.data);
    dispatch({ type: GET_PIZZAS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_PIZZAS_FAILED, payload: error });
  }
};
