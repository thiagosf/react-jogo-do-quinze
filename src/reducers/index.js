import { combineReducers } from 'redux'

const initialState = {
  puzzle_items: [],
  blank_position: 16,
  multiple: 4,
  pieces: 16,
  from_position: null,
  to_position: null,
  started: false,
  starting: false,
  winner: false,
  resolution_movements: [],
  resolving: false
}

function puzzle(state = initialState, action) {
  switch (action.type) {
    case 'STARTING': 
      return Object.assign({}, state, {
        starting: true
      })

    case 'START': 
      return Object.assign({}, state, {
        started: true,
        starting: false,
        winner: false,
        resolution_movements: action.resolution_movements
      })

    case 'START_ITEMS': 
      return Object.assign({}, state, {
        puzzle_items: action.puzzle_items,
        winner: false
      })

    case 'MOVE_PUZZLE_ITEM': 
      return Object.assign({}, state, {
        winner: false,
        blank_position: action.from_position,
        from_position: action.from_position,
        to_position: action.to_position,
        resolution_movements: [],
        puzzle_items: state.puzzle_items.map(item => {
          if (action.from_position == item.position) {
            item.position = action.to_position
          }
          return item
        })
      })

    case 'WINNER':
      return Object.assign({}, state, {
        winner: true,
        started: false,
        resolution_movements: []
      })

    case 'RESOLVING':
      return Object.assign({}, state, {
        resolving: true
      })

    case 'RESOLVED':
      return Object.assign({}, state, {
        resolving: false
      })

    case 'RESET':
      return Object.assign({}, state, {
        puzzle_items: action.puzzle_items,
        resolution_movements: []
      })

    default:
      return state
  }
}

export default combineReducers({ puzzle })
