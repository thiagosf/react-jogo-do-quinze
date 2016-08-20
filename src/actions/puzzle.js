let actions = {}

export function startPuzzleItems () {
  var puzzle_items = []
  for (let i = 1; i <= 15; i++) {
    puzzle_items.push({ id: i, label: i })
  }
  return {
    type: 'START_ITEMS',
    puzzle_items: puzzle_items
  }
}
