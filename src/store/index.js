import { combineReducers, createStore } from 'redux'
import { chat } from './reducers/chat'

export default createStore(combineReducers({
  chat
}))