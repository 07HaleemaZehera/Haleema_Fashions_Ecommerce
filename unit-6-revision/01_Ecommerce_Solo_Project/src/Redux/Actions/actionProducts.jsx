import {
  GET_JSON_PRODUCT_DATA,
  SUCCESS_JSON_PRODUCT_SHOWN,
  FAILURE_JSON_PRODUCT_SHOWN,
  LOADING_JSON_PRODUCT_SHOWN,
  GET_JSON_MEN_DATA,
  GET_JSON_WOMEN_DATA,
  GET_FILTER_PRODUCT,
  GET_SORTING_PRODUCT,
  PARTICULAR_DATA,
  ADD_CHECKOUT_ADDRESS,
  ADD_PAYMENT_DETAILS,
  ADD_HANDLE_BUY
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

export const particularData = (data) => {
  return {
    type:PARTICULAR_DATA,
    payload : data.data
  }
}

export const getFilter_product = (data) => (dispatch) => {
  dispatch(loadingJson_action_products());
  try {
    axios
      .get(`http://localhost:3000/products?Brand=${data}`)
      .then((data) => {
        console.log("data", data);
        dispatch({ type: GET_FILTER_PRODUCT, payload: data.data }); //senfd to reducer
        dispatch(successJson_action_products());
      })
      .catch(() => {
        dispatch(failureJson_action_products());
      });
  } catch (error) {
    console.log(error);
  }
};
export const getSorting_product = (value) => (dispatch) => {
  dispatch(loadingJson_action_products());
  try {
    if (value == "desc") {
      axios
        .get(`http://localhost:3000/products?_sort=Price&_order=desc,asc`)
        .then((data) => {
          console.log("data", data);
          dispatch({ type: GET_SORTING_PRODUCT, payload: data.data }); //senfd to reducer
          dispatch(successJson_action_products());
        })
        .catch(() => {
          dispatch(failureJson_action_products());
        });
    } else {
      axios
        .get(`http://localhost:3000/products?_sort=Price&_order=asc`)
        .then((data) => {
          console.log("data", data);
          dispatch({ type: GET_SORTING_PRODUCT, payload: data.data }); //senfd to reducer
          dispatch(successJson_action_products());
        })
        .catch(() => {
          dispatch(failureJson_action_products());
        });
    }
  } catch (error) {
    console.log(error);
  }
};



export const AddtCartData = (id) =>  {
 console.log('cartData', id);
 return {
   type : "ADD_CART_DATA", payload: id
 }
};

export const updatedCarts = () =>  {

 return {
   type : "UP_CART_DATA", 
 }
};
export const AddCheckoutAddress = (data) =>  {
console.log('data', data);

 return {
   type : ADD_CHECKOUT_ADDRESS, 
   payload:data
 }
};
export const AddpaymentDetails = (data) =>  {
console.log('data', data);

 return {
   type : ADD_PAYMENT_DETAILS, 
   payload:data
 }
};
export const AddHandleBuy = (data) =>  {
console.log('data', data);

 return {
   type : ADD_HANDLE_BUY, 
   payload:data
 }
};


