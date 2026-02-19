export function movie(card: number, ticket: number, perc: number): number {
 let n = 1
  let totalB = card
  let ticketPrice = ticket * perc

  while (true) {
    totalB += ticketPrice

    let totalA = n * ticket

    if (Math.ceil(totalB) < totalA) {
      return n
    }

    n++
    ticketPrice *= perc
  }
}