function exchangeWith(a, b) {
let first=[...b].reverse()
let second=[...a].reverse()
a.length=0
  b.length=0
a.push(...first)
  b.push(...second)
}