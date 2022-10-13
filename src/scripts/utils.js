function randomNumFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomItemFromList(list) {
  return list[Math.floor(Math.random() * list.length)]
}

export {randomNumFromRange, randomItemFromList};