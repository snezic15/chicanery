let input = "I am not crazy! 12345"

const alpha: string[] = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("")
const numbersToWords: any = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
}

function chicanery(input: string): string {
  let ret: string = ""

  // Input formatting
  const inputFinal: string[] = input
    .replace(/[^a-z0-9]/gi, "")
    .toUpperCase()
    .split("")

  for (let i = 0; i < inputFinal.length; i++) {
    for (let x = 0; x < alpha.length; x++) {
      if (!isNaN(Number(inputFinal[i]))) {
        ret += numToString(inputFinal[i])
        break
      } else if (alpha[x] === inputFinal[i]) {
        ret += `${alpha[x]} *ding*\n`
        break
      } else ret += alpha[x]
    }
  }

  return ret
}

function numToString(input: string): string {
  let ret: string = ""

  let temp: string[] = numbersToWords[input].toUpperCase().split("")
  for (let z = 0; z < temp.length; z++) {
    for (let y = 0; y < alpha.length; y++) {
      if (alpha[y] === temp[z]) {
        ret += `${alpha[y]} *ding*\n`
        break
      } else ret += alpha[y]
    }
  }

  return ret
}

console.log(chicanery(input))
