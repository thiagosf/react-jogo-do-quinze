import Sound from 'react-sound'

const initialState = {
  current_sound: '',
  play_status: Sound.status.STOPPED,
  enabled: true
}

const sounds = {
  puzzle_move: 'sounds/puzzle_move.mp3',
  winner: 'sounds/winner.mp3'
}

export default function sound(state = initialState, action) {
  switch (action.type) {
    case 'PLAY': 
      return Object.assign({}, state, {
        current_sound: sounds[action.sound],
        play_status: (
          state.enabled ? Sound.status.PLAYING : Sound.status.STOPPED
        )
      })

    case 'STOP': 
      return Object.assign({}, state, {
        play_status: Sound.status.STOPPED
      })

    case 'ENABLE': 
      return Object.assign({}, state, {
        enabled: true
      })

    case 'DISABLE': 
      return Object.assign({}, state, {
        enabled: false
      })

    default:
      return state
  }
}
