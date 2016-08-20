import { combineReducers } from 'redux'

const initialState = {
  puzzle_items: [],
  blank_position: 16,
  multiple: 4,
  pieces: 16,
  from_position: null,
  to_position: null
}

function puzzle(state = initialState, action) {
  switch (action.type) {
    case 'START_ITEMS': 
      return Object.assign({}, state, {
        puzzle_items: action.puzzle_items
      })

    case 'MOVE_PUZZLE_ITEM': 
      return Object.assign({}, state, {
        blank_position: action.from_position,
        from_position: action.from_position,
        to_position: action.to_position,
        puzzle_items: state.puzzle_items.map(item => {
          if (action.from_position == item.position) {
            item.position = action.to_position
          }
          return item
        })
      })

    default:
      return state
  }
}

export default combineReducers({ puzzle })
