function randomNumFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomItemFromList(list) {
  return list[Math.floor(Math.random() * list.length)]
}

function distance(x1, y1, x2, y2) {
  const DistX = x2 - x1
  const DistY = y2 - y1

  return Math.sqrt(Math.pow(DistX, 2) + Math.pow(DistY, 2))
}

export {randomNumFromRange, randomItemFromList, distance};