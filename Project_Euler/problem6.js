//The sum of the squares of the first ten natural numbers is,
//1^2 + 2^2 + ... + 10^2 = 385
//The square of the sum of the first ten natural numbers is,
//(1 + 2 + ... + 10)^2 = 55^2 = 3025
//Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 - 385 = 2640.
//Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

var n1 = 0
var n2 = 0
for (var a = 1; a <= 100; a++){
        n1 = n1 + a*a
        n2 = n2 + a

        var resultado = (n2*n2) - n1


        console.log(`O valor de 1 é ${n1} e 2 é ${n2} e resultado é ${resultado}`)
    
        
}

