//The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
//Find the sum of all the primes below two million.

var soma = 0

function isPrime(numero) {
  let comeco = 2;
  const limite = Math.sqrt(numero);
  while (comeco <= limite) {
      if (numero % comeco++ < 1){
        return false;
      } 
  }
  
  return numero;
}

console.log(isPrime(7)) //true
console.log(isPrime(15)) // false


for(let i = 2; i <= 2000000; i++){
  soma = isPrime(i) + soma
}
console.log(soma)


// for(var i = 0; i <= 2000000; i++){
//   var primos = i.filter(ePrimo)
//   console.log(primos)
// }

// // console.log(soma)



