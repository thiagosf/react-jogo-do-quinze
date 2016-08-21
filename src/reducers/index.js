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
  winner_computer: false,
  resolving_movements: [],
  resolving: false,
  reset: false,
  moves: 0,
  perfect_moves: 0,
  seconds: 0
}

function puzzle(state = initialState, action) {
  switch (action.type) {
    case 'STARTING': 
      return Object.assign({}, state, {
        starting: true,
        seconds: 0
      })

    case 'START': 
      return Object.assign({}, state, {
        started: true,
        starting: false,
        winner: false,
        resolving_movements: action.resolving_movements,
        reset: false,
        winner_computer: false,
        moves: 0,
        perfect_moves: action.resolving_movements.length
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
        resolving_movements: action.resolving_movements,
        moves: action.moves,
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
        resolving_movements: []
      })

    case 'RESOLVING':
      return Object.assign({}, state, {
        resolving: true,
        winner_computer: true
      })

    case 'RESOLVED':
      return Object.assign({}, state, {
        resolving: false,
        resolving_movements: []
      })

    case 'RESET':
      return Object.assign({}, state, {
        puzzle_items: action.puzzle_items,
        resolving_movements: [],
        reset: true,
        blank_position: initialState.blank_position
      })

    case 'TICK': 
      return Object.assign({}, state, {
        seconds: state.seconds + 1
      })

    default:
      return state
  }
}

export default combineReducers({ puzzle })
