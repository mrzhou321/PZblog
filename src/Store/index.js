import {combineReducers } from 'redux' 
import AppReducer from './AppReducer'
import ArticleReducer from './ArticleReducer'

const reducers = combineReducers(AppReducer, ArticleReducer)

export default reducers
