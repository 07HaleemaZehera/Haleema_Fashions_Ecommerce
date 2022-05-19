

export const addSearch = (data)=>{
    console.log('payload search', data);
    return {
        type : "ADD_SEARCH_RESULT", payload : data
    }



}


