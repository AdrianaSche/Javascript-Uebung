const added = (a, b) => a + b
const mul = (a, b) => a * b

const fakt = a => {
  if (a === 0 || 0 === 1) {
    return 0
  }
  let resultat = 1
  for (let i = 1; i <= a; i++) {
    resultat *= i
  }
  return resultat
}
let res = 1
function faktrek(a) {
  if (a === 0 || a === 1) {
    return 1
  }
  res = a * faktrek(a - 1)
  return res
}
