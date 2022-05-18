import {
  GET_JSON_PRODUCT_DATA,
  SUCCESS_JSON_PRODUCT_SHOWN,
  FAILURE_JSON_PRODUCT_SHOWN,
  LOADING_JSON_PRODUCT_SHOWN,
  GET_JSON_MEN_DATA,
  GET_JSON_WOMEN_DATA,
  PARTICULAR_DATA,
  ADD_CHECKOUT_ADDRESS,
  ADD_PAYMENT_DETAILS,
  ADD_HANDLE_BUY,
} from "../ActionTypes/ActionTypes";
import axios from "axios";

export const getJson_action_Products = () => (dispatch) => {
  dispatch(loadingJson_action_products());
  try {
    axios
      .get("http://localhost:5000/products")
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
// ================================================================================

export const getMen_Json_Data = (Men) => (dispatch) => {
  dispatch(loadingJson_action_products());
  try {
    axios
      .get(`http://localhost:5000/mens`)
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

export const getwomen_Json_Data = (Men) => (dispatch) => {
  dispatch(loadingJson_action_products());
  try {
    axios
      .get(`http://localhost:5000/womens`)
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
export const getKid_Json_Data = (Kid) => (dispatch) => {
  try {
    axios
      .get(`http://localhost:5000/kids`)
      .then((data) => {
        console.log("data kid", data);
        dispatch({ type: "GET_JSON_KID_DATA", payload: data.data }); //senfd to reducer
      })
      .catch(() => {
      });
  } catch (error) {
    console.log(error);
  }
};

// ===========================================================================================
export const particularData = (data) => {
  console.log('data', data);
  return {
    type: PARTICULAR_DATA,
    payload: data.data,
  };
};

export const getFilter_product_Men = (data) => (dispatch) => {
  dispatch(loadingJson_action_products());
  try {
    axios
      .get(`http://localhost:5000/mens?category=${data}`)
      .then((data) => {
        console.log("data", data);
        dispatch({ type: "GET_MEN_FILTER_PRODUCT", payload: data.data }); //senfd to reducer
        dispatch(successJson_action_products());
      })
      .catch(() => {
        dispatch(failureJson_action_products());
      });
  } catch (error) {
    console.log(error);
  }
};

export const getFilter_product_Women = (data) => (dispatch) => {
  dispatch(loadingJson_action_products());
  try {
    axios
      .get(`http://localhost:5000/womens?category=${data}`)
      .then((data) => {
        console.log("data", data);
        dispatch({ type: "GET_WOMEN_FILTER_PRODUCT", payload: data.data }); //senfd to reducer
        dispatch(successJson_action_products());
      })
      .catch(() => {
        dispatch(failureJson_action_products());
      });
  } catch (error) {
    console.log(error);
  }
};

export const getFilter_product_Kid = (data) => (dispatch) => {
  dispatch(loadingJson_action_products());
  try {
    axios
      .get(`http://localhost:5000/kids?category=${data}`)
      .then((data) => {
        console.log("data", data);
        dispatch({ type: "GET_KID_FILTER_PRODUCT", payload: data.data }); //senfd to reducer
        dispatch(successJson_action_products());
      })
      .catch(() => {
        dispatch(failureJson_action_products());
      });
  } catch (error) {
    console.log(error);
  }
};

export const getMen_Sorting_product = (value) => (dispatch) => {
  try {
    if (value == "desc") {
      axios
        .get(`http://localhost:5000/mens/sortdesc`) //?_sort=price&_order=desc,asc
        .then((data) => {
          console.log("data", data);
          dispatch({ type: "GET_MEN_SORTING_PRODUCT", payload: data.data }); //senfd to reducer
        });
    } else {
      axios.get(`http://localhost:5000/mens/sortasc`).then((data) => {
        console.log("data", data);
        dispatch({ type: "GET_MEN_SORTING_PRODUCT", payload: data.data }); //senfd to reducer
      });
    }
  } catch (error) {
    console.log(error);
  }
};
export const getWomen_Sorting_product = (value) => (dispatch) => {
  try {
    if (value == "desc") {
      axios
        .get(`http://localhost:5000/womens/sortdesc`) //?_sort=price&_order=desc,asc
        .then((data) => {
          console.log("data", data);
          dispatch({ type: "GET_WOMEN_SORTING_PRODUCT", payload: data.data }); //senfd to reducer
        });
    } else {
      axios.get(`http://localhost:5000/womens/sortasc`).then((data) => {
        console.log("data", data);
        dispatch({ type: "GET_WOMEN_SORTING_PRODUCT", payload: data.data }); //senfd to reducer
      });
    }
  } catch (error) {
    console.log(error);
  }
};
export const getKid_Sorting_product = (value) => (dispatch) => {
  try {
    if (value == "desc") {
      axios
        .get(`http://localhost:5000/kids/sortdesc`) //?_sort=price&_order=desc,asc
        .then((data) => {
          console.log("data", data);
          dispatch({ type: "GET_KID_SORTING_PRODUCT", payload: data.data }); //senfd to reducer
        });
    } else {
      axios.get(`http://localhost:5000/kids/sortasc`).then((data) => {
        console.log("data", data);
        dispatch({ type: "GET_KID_SORTING_PRODUCT", payload: data.data }); //senfd to reducer
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const AddtCartData = (id) => {
  console.log("cartData", id);
  return {
    type: "ADD_CART_DATA",
    payload: id,
  };
};

export const updatedCarts = () => {
  return {
    type: "UP_CART_DATA",
  };
};
export const DeleteTheData = (id) => {
  return {
    type: "DELETE_THE_CART_DATA",
    payload: id,
  };
};
export const AddCheckoutAddress = (data) => {
  console.log("data", data);

  return {
    type: ADD_CHECKOUT_ADDRESS,
    payload: data,
  };
};
export const AddpaymentDetails = (data) => {
  console.log("data", data);

  return {
    type: ADD_PAYMENT_DETAILS,
    payload: data,
  };
};
export const AddHandleBuy = (data) => {
  console.log("data", data);

  return {
    type: ADD_HANDLE_BUY,
    payload: data,
  };
};
