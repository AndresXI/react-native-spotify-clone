import thunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import user from './reducers/user'
import auth from './reducers/auth'
import playlist from './reducers/playlist'
import browse from './reducers/browse'
import library from './reducers/library'
import track from './reducers/track'
import search from './reducers/search'
import audioPlayer from './reducers/audioPlayer'

const rootReducer = combineReducers({
  auth,
  audioPlayer,
  search,
  track,
  user,
  playlist,
  browse,
  library,
})

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
