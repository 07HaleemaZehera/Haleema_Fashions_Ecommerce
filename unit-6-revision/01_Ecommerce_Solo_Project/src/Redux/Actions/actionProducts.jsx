import { GET_JSON_PRODUCT_DATA } from "../ActionTypes/ActionTypes";
import axios from "axios"

export const getJson_action_Products = () => (dispatch) => {
  try {
    axios.get("http://localhost:3000/products").then(( data ) => {
      console.log('data', data);
      dispatch({ type: GET_JSON_PRODUCT_DATA, payload:data.data });
    });
  } catch (error) {
      console.log("erroe",error)
  }
};
