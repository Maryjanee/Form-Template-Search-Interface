import {FILTER_TEMPLATES_BY_CATEGORY,
  FILTER_TEMPLATES_BY_ORDER,
  FILTER_TEMPLATES_BY_DATE} from '../constants';

const initialState = { sortby: "" }

export const sortReducer = (state = initialState, action) => {
  switch(action.type){
    case FILTER_TEMPLATES_BY_CATEGORY:
    return {...state, sortby:action.payload}

    case FILTER_TEMPLATES_BY_ORDER:
    return {...state, sortby:action.payload}

    case FILTER_TEMPLATES_BY_DATE:
    return {...state, sortby:action.payload}

    default:
      return state
  }

}