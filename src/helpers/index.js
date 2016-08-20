export function getFromTo(direction, options) {
  const { blank_position, pieces, multiple } = options
  let from_position, to_position;

  switch(direction) {
    case 'right':
      [from_position, to_position] = [blank_position - 1, blank_position]
      break

    case 'left':
      [from_position, to_position] = [blank_position + 1, blank_position]
      break

    case 'bottom':
      [from_position, to_position] = [blank_position - multiple, blank_position]
      break

    case 'top':
      [from_position, to_position] = [blank_position + multiple, blank_position]
      break
  }
  return { from_position: from_position, to_position: to_position }
}

export function validMove(direction, options) {
  const { blank_position, pieces, multiple } = options
  let valids = []

  // canto direito e nao tem abaixo (16) = topo,esquerdo
  if (blank_position == pieces) {
    valids = ['bottom', 'right']
  }

  // canto esquerdo e nao tem acima (1) = direito,abaixo
  else if (blank_position == 1) {
    valids = ['left', 'top']
  }
  
  // nao tem acima tem lados (2,3) = esquerdo,abaixo,direito
  else if (blank_position > 1 && blank_position < multiple) {
    valids = ['left', 'right', 'top']
  }

  // canto direito e nao tem acima (4) = esquerdo,abaixo
  else if (blank_position == multiple) {
    valids = ['right', 'top']
  }

  // nao eh canto e nao tem abaixo (14,15) = esquerdo,topo,direito
  else if ((blank_position + multiple + 1) > pieces) {
    valids = ['left', 'right', 'bottom']
  }

  // canto esquerdo e nao tem abaixo (13) = topo,direito
  else if ((blank_position + multiple - 1) == pieces) {
    valids = ['right', 'bottom']
  }

  // canto direito tem abaixo e acima (8,12) = topo,esquerdo,abaixo
  else if (blank_position % multiple == 0 && blank_position != multiple && blank_position < pieces) {
    valids = ['right', 'bottom', 'top']
  }

  // canto esquerdo tem abaixo e acima (5,9) = topo,direito,abaixo
  else if ((blank_position - 1) % multiple == 0 && (blank_position - 1) != multiple) {
    valids = ['left', 'bottom', 'top']
  }

  // tem acima, abaixo, esquerdo e direito (6,7,10,11) = todas posicoes
  else {
    valids = ['right', 'left', 'bottom', 'top']
  }

  // 16 = 12.bottom,15.right
  // 15 = 11,14,16
  // 14 = 10,13,15
  // 13 = 9,14
  // 12 = 8,11,16
  // 11 = 7,10,12,15
  // 10 = 6,9,11,14
  //  9 = 5,10,13
  //  8 = 4,7,12
  //  7 = 3,6,8,11
  //  6 = 2,5,7,10
  //  5 = 1,6,9
  //  4 = 3,8
  //  3 = 2,4,7
  //  2 = 1,3,6
  //  1 = 2,5

  return valids.includes(direction)
}
