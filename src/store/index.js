import { combineReducers, createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { chat } from './reducers/chat'

const reducer = combineReducers({
  chat
})

export default createStore(
  reducer,
  applyMiddleware(logger)
)