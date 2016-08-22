export function play (sound) {
  return { type: 'PLAY', sound }
}

export function stop () {
  return { type: 'STOP' }
}

export function enable () {
  return { type: 'ENABLE' }
}

export function disable () {
  return { type: 'DISABLE' }
}
