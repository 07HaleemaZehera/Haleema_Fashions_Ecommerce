import {
  GET_JSON_PRODUCT_DATA,
  SUCCESS_JSON_PRODUCT_SHOWN,
  FAILURE_JSON_PRODUCT_SHOWN,
  LOADING_JSON_PRODUCT_SHOWN,
  GET_JSON_MEN_DATA,
  GET_JSON_WOMEN_DATA
} from "../ActionTypes/ActionTypes";
import axios from "axios";

export const getJson_action_Products = () => (dispatch) => {
  dispatch(loadingJson_action_products());
  try {
    axios
      .get("http://localhost:3000/products")
      .then((data) => {
        console.log("data", data);
        dispatch({ type: GET_JSON_PRODUCT_DATA, payload: data.data }); //senfd to reducer
        dispatch(successJson_action_products());
      })
      .catch(() => {
        dispatch(failureJson_action_products());
      });
  } catch (error) {
    console.log(error);
  }
};

export const successJson_action_products = () => {
  return {
    type: SUCCESS_JSON_PRODUCT_SHOWN,
  };
};
export const failureJson_action_products = () => {
  return {
    type: FAILURE_JSON_PRODUCT_SHOWN,
  };
};
export const loadingJson_action_products = () => {
  return {
    type: LOADING_JSON_PRODUCT_SHOWN,
  };
};

export const getMen_Json_Data = (Men) => (dispatch) => {
  dispatch(loadingJson_action_products());
  try {
    axios
      .get(`http://localhost:3000/products?Category=${Men}`)
      .then((data) => {
        console.log("data", data);
        dispatch({ type: GET_JSON_MEN_DATA, payload: data.data }); //senfd to reducer
        dispatch(successJson_action_products());
      })
      .catch(() => {
        dispatch(failureJson_action_products());
      });
  } catch (error) {
    console.log(error);
  }
};

export const getwomen_Json_Data = (Women) => (dispatch) => {
  dispatch(loadingJson_action_products());
  try {
    axios
      .get(`http://localhost:3000/products?Category=${Women}`)
      .then((data) => {
        console.log("data", data);
        dispatch({ type: GET_JSON_WOMEN_DATA, payload: data.data }); //senfd to reducer
        dispatch(successJson_action_products());
      })
      .catch(() => {
        dispatch(failureJson_action_products());
      });
  } catch (error) {
    console.log(error);
  }
};

