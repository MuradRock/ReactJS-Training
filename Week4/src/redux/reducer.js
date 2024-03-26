import { ADD_TO_CART, REMOVE_TO_CART, UPDATE_TO_CART } from "./constant";

const initialState=[];
export const reducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_TO_CART:
            //let newItem=state.filter(item=>item.id===action.data.id)
           
            return [
                ...state,
                action.data
            ]
         case REMOVE_TO_CART:
            let filterdItems=state.filter(item=>item.id!==action.id)
            console.log(`filtered items `,filterdItems);
            return [...filterdItems];

         case UPDATE_TO_CART:
            let filterd=state.filter(item=>item.id!==action.data.id)
            return [...filterd,action.data]
        default:
            return state;    
    }
}