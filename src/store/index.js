import { combineReducers, createStore } from 'redux'
import chat from './reducers/chat'

const reducers = combineReducers({
  chat
})

export default createStore(reducers)