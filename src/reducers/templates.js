import {
  GET_TEMPLATES_REQUEST,
  GET_TEMPLATES_FULFILLED,
  GET_TEMPLATES_ERROR,
} from "../constants";

const initialState = {
  pending: false,
  templates: [],
  error: null,
};

export const templatesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TEMPLATES_REQUEST:
      return { ...state, pending: true };

    case GET_TEMPLATES_FULFILLED:
      return { ...state, templates: action.payload, error: null };

    case GET_TEMPLATES_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
