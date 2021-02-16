
let author = "MalcomX"
let book = "My life in Carthage"
let msg = "C'était à Mégara, faubourg de Carthage, dans les jardins d'Hamilcar."

console.log(msg)
console.log(`this sentence is extract by the book ${book} of ${author}. The sentence containe ${msg.length} character.`)

for (let i = 0; i < msg.length; ++i) {
  console.log(`the ${msg[i]} character is at index: ${i}`)
}