let input = "Hello, my name is Tiago and I am a Web Developer and a bookworm!";
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = []

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(vowels[j]);
    }
  }
}
console.log(resultArray.join('').toUpperCase());