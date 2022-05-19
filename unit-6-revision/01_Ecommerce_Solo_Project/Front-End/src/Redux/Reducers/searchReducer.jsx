
const initState = {
    searchs : []
}
export const searchReducer = (state = initState, {type, payload}) => {

       switch(type){
           case "ADD_SEARCH_RESULT" : return  {...state, searchs : payload }
         
           default : return state
       }

}