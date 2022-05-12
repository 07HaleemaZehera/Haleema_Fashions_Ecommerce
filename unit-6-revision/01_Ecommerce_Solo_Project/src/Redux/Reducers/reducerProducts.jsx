import { GET_JSON_PRODUCT_DATA ,SUCCESS_JSON_PRODUCT_SHOWN,FAILURE_JSON_PRODUCT_SHOWN,LOADING_JSON_PRODUCT_SHOWN, GET_JSON_MEN_DATA, GET_JSON_WOMEN_DATA, GET_FILTER_PRODUCT, GET_SORTING_PRODUCT, PARTICULAR_DATA} from "../ActionTypes/ActionTypes";
const initState={
products_data:[],
success:false,
loading:true,
failure:false,
cart : []
}
export const getJson_reducer_Products=(state=initState,{type,payload})=>{
    console.log('payload', payload);
    switch(type){
        case GET_JSON_PRODUCT_DATA:
            return{...state,products_data:payload}
        case SUCCESS_JSON_PRODUCT_SHOWN:
            return{...state,success:true}
        case FAILURE_JSON_PRODUCT_SHOWN:
            return{...state,failure:true}
        case LOADING_JSON_PRODUCT_SHOWN:
            return{...state,loading:false}
            case GET_JSON_MEN_DATA:
                return{...state,products_data:payload}
                case GET_JSON_WOMEN_DATA:
                    return{...state,products_data:payload}
                    case GET_FILTER_PRODUCT:
                        return{...state,products_data:payload}
                    case GET_SORTING_PRODUCT:
                        return{...state,products_data:payload}
                    case PARTICULAR_DATA:
                        return{...state,products_data:payload}
                    case "ADD_CART_DATA":
                        return{...state,cart:[...state.cart ,payload]}
                    case "UP_CART_DATA":
                        return{...state,cart:payload}
            default:
                return state
    }
}