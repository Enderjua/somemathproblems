const numbers = [];



for (let i = 1; i <= 100; i++) {
  numbers.push(i);
}

const newNumbers = [];

for (let number of numbers) {
  let digits = number.toString().split("");

  for (let i = 0; i < digits.length; i++) {
    if (digits[i] !== "1") {
      newNumbers.push(digits[i]);
    }
  }
}

console.log("istenen şey yerine getirildi: "+newNumbers.reduce((a, b) => a + b));

let sayi = newNumbers.reduce((a, b) => a + b)

var toplam = Array.from(String(sayi), Number).reduce((acc, digit) => acc + digit, 0);

console.log("Rakamların Toplamı:", toplam);
