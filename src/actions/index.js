import {GET_TEMPLATES_REQUEST,
  GET_TEMPLATES_FULFILLED,
  GET_TEMPLATES_ERROR, FILTER_TEMPLATES_BY_CATEGORY,
  FILTER_TEMPLATES_BY_ORDER,FILTER_TEMPLATES_BY_DATE, SEARCH_TEMPLATES_BY_CATEGORIES} from '../constants';


export const getTemplatesRequest = () => ({
  type:GET_TEMPLATES_REQUEST
})

export const getTemplatesFulfilled = templates => ({
  type:GET_TEMPLATES_FULFILLED,
  payload: templates
})

export const getTemplatesError = (error) => ({
  type:GET_TEMPLATES_ERROR,
  payload: error
})

export const filterTemplatesByCategory = (category) =>({
  type:FILTER_TEMPLATES_BY_CATEGORY,
  payload:category
})

export const filterTemplatesByOrder = (order) =>({
  type:FILTER_TEMPLATES_BY_ORDER,
  payload:order
})

export const filterTemplatesByDate = (date) =>({
  type:FILTER_TEMPLATES_BY_DATE,
  payload:date
})

export const searchTemplatesCategory = (category) =>({
  type:SEARCH_TEMPLATES_BY_CATEGORIES,
  payload:category
})

