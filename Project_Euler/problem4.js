//A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
//Find the largest palindrome made from the product of two 3-digit numbers.

var a = 1
var b = 1

for ( a = 1 ; a < 1000 ; a++){
    for ( b = 1 ; b < 1000 ; b++){
        var pal = a * b
        
        var temp = pal
        var inv = 0

        while (temp > 0){
            var resto = Math.floor( temp % 10)
            inv = inv * 10 + resto
            temp = Math.floor(temp / 10)

            if (pal == inv && inv > 900000){
                console.log(inv)
            }        
            
        }
       
    }
}


/*

var numero = 1234
var a = numero
var invertido = 0
while ( a > 0){
    var resto = Math.floor(a % 10)
    invertido = invertido * 10 + resto
    a = Math.floor(a / 10)

}

console.log(invertido)

*/




/*
function inverter(s) {
    return s.split('').reverse().join('');
  }
  */
