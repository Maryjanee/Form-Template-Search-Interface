import { SEARCH_TEMPLATES_BY_CATEGORIES } from "../constants";

const intialState = {searchQuery: ""}

export const searchReducer = (state= intialState, action)=> {
   switch (action.type){
     case SEARCH_TEMPLATES_BY_CATEGORIES:
       return {...state, searchQuery: action.payload}
       default:
         return state;
   }

}