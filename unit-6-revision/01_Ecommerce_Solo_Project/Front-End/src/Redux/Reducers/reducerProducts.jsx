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
const initState = {
  products_data: [],
  success: false,
  loading: true,
  failure: false,
  cart: [],
  checkout: "",
  payment:"",
  buyNow:{}
};
export const getJson_reducer_Products = (
  state = initState,
  { type, payload }
) => {
  console.log("payload", payload);
  switch (type) {
    case GET_JSON_PRODUCT_DATA:
      return { ...state, products_data: payload };
    case SUCCESS_JSON_PRODUCT_SHOWN:
      return { ...state, success: true };
    case FAILURE_JSON_PRODUCT_SHOWN:
      return { ...state, failure: true };
    case LOADING_JSON_PRODUCT_SHOWN:
      return { ...state, loading: false };
    case GET_JSON_MEN_DATA:
      return { ...state, products_data: payload };
    case GET_JSON_WOMEN_DATA:
      return { ...state, products_data: payload };
    case GET_FILTER_PRODUCT:
      return { ...state, products_data: payload };
    case GET_SORTING_PRODUCT:
      return { ...state, products_data: payload };
    case PARTICULAR_DATA:
      return { ...state, products_data: payload };
    case "ADD_CART_DATA":
      const cartData = state.products_data.filter((ele) => ele.id === payload); ///propducts arr check

      const compareData = state.cart.filter((ele) => ele.id === payload);
      console.log("payload", payload);
      if (compareData.length != 0) {
        return { ...state };
      } else {
        return { ...state, cart: [...state.cart, cartData[0]]};
      }
    case "UP_CART_DATA":
      return { ...state, cart: [...state.cart] };
    case "DELETE_THE_CART_DATA":
      const updatedData = state.cart.filter((ele)=> ele.id != payload)
      console.log('payload', payload);


      
      console.log('updatedData', updatedData);
      return { ...state, cart: updatedData };
    case ADD_CHECKOUT_ADDRESS:
      return { ...state, checkout: payload };
    case ADD_PAYMENT_DETAILS:
      return { ...state, payment:payload};
    case ADD_HANDLE_BUY:
      return { ...state, buyNow:payload};
    default:
      return state;
  }
};


