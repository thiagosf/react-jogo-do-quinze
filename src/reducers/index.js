import { combineReducers } from 'redux'

const initialState = {
  puzzle_items: []
}

function puzzle(state = initialState, action) {
  switch (action.type) {
    case 'START_ITEMS': 
      return Object.assign({}, state, {
        puzzle_items: action.puzzle_items
      })
    default:
      return state
  }
}

export default combineReducers({ puzzle })