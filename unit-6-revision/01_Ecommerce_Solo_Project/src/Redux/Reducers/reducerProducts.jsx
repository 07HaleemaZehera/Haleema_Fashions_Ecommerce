import { GET_JSON_PRODUCT_DATA } from "../ActionTypes/ActionTypes";
const initState={
products_data:[]
}
export const getJson_reducer_Products=(state=initState,{type,payload})=>{
    console.log('payload', payload);
    switch(type){
        case GET_JSON_PRODUCT_DATA:
            return{...state,products_data:payload};
            default:
                return state
    }
}