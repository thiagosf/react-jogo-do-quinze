import { directions, validMove, getFromTo } from '../helpers'

export function startPuzzleItems () {
  var puzzle_items = []
  for (let i = 1; i <= 15; i++) {
    puzzle_items.push({ id: i, label: i, position: i })
  }
  return {
    type: 'START_ITEMS',
    puzzle_items
  }
}

export function movePuzzleItem (direction, from_position, to_position, moves = 0) {
  return (dispatch, getState) => {
    let resolving_movements = [].concat(
      getState().puzzle.resolving_movements
    ).reverse()
    resolving_movements.push({ direction: inverseDirection(direction) })
    resolving_movements = resolving_movements.reverse()
    dispatch({
      type: 'MOVE_PUZZLE_ITEM',
      direction,
      from_position,
      to_position,
      resolving_movements,
      moves
    })
  }
}

export function checkWinner() {
  return (dispatch, getState) => {
    const puzzle = getState().puzzle
    const puzzle_items = puzzle.puzzle_items
    const count = puzzle_items.filter(item => {
      return item.id == item.position
    }).length
    if (
      count == (puzzle.pieces - 1) && 
      puzzle.started && 
      !puzzle.winner && 
      !puzzle.reset
    ) {
      dispatch(winner())
    }
  }
}

export function start({ level = 1 }) {
  return (dispatch, getState) => {
    dispatch({ type: 'STARTING' })

    const top = document.querySelector('.puzzle-container-box').offsetTop - 20
    window.scrollTo(0, top)

    const movements_count = getMovementsCount(level)
    const velocity = 100
    let puzzle = Object.assign({}, getState().puzzle)
    let movements = []
    let resolving_movements = puzzle.resolving_movements.reverse()
    let last_movement = null

    for (let i = 0; i < movements_count; i++) {
      let rand = Math.floor(Math.random() * directions.length)
      let direction = directions[rand]

      if (validMove(direction, puzzle)) {
        const { from_position, to_position } = getFromTo(direction, puzzle)
        if (last_movement != inverseDirection(direction)) {
          last_movement = direction

          movements.push({
            direction: direction,
            from_position: from_position,
            to_position: to_position
          })

          resolving_movements.push({
            direction: inverseDirection(direction)
          })

          puzzle.blank_position = from_position
        } else {
          --i
        }
      } else {
        --i
      }
    }

    let interval = setInterval(() => {
      let item = movements.shift()
      if (item) {
        movePiece(dispatch, item)
      } else {
        clearInterval(interval)
        dispatch({ type: 'START', resolving_movements: resolving_movements.reverse() })
        createTimer(dispatch, getState)
      }
    }, velocity)
  }
}

export function solve() {
  return (dispatch, getState) => {
    dispatch({ type: 'RESOLVING' })

    let puzzle = Object.assign({}, getState().puzzle)
    const movements = [].concat(puzzle.resolving_movements)
    const velocity = 100

    let interval = setInterval(() => {
      let item = movements.shift()
      if (item) {
        const { from_position, to_position } = getFromTo(item.direction, puzzle)
        item.from_position = from_position
        item.to_position = to_position
        movePiece(dispatch, item)
        puzzle.blank_position = from_position
      } else {
        clearInterval(interval)
        dispatch({ type: 'RESOLVED' })
      }
    }, velocity)
  }
}

export function reset() {
  return dispatch => {
    let options = startPuzzleItems()
    dispatch(Object.assign(options, { type: 'RESET' }))
  }
}

function winner () {
  return {
    type: 'WINNER'
  }
}

function getMovementsCount(level) {
  let movements_count
  switch(level) {
    case 1: movements_count = 5; break;
    case 2: movements_count = 20; break;
    case 3: movements_count = 50; break;
    case 4: movements_count = 100; break;
  }
  return movements_count
}

function movePiece(dispatch, item) {
  dispatch(movePuzzleItem(
    item.direction,
    item.from_position,
    item.to_position
  ))
}

function inverseDirection(direction)  {
  let inverse
  switch(direction) {
    case 'left':   inverse = 'right'; break;
    case 'right':  inverse = 'left'; break;
    case 'top':    inverse = 'bottom'; break;
    case 'bottom': inverse = 'top'; break;
  }
  return inverse
}

function createTimer(dispatch, getState) {
  let interval = null
  interval = setInterval(() => {
    const { puzzle } = getState()
    if (!puzzle.winner) {
      dispatch({ type: 'TICK' })
    } else {
      clearInterval(interval)
    }
  }, 1000)
}
