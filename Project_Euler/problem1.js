var soma = 0
for ( var n = 1 ; n < 1000 ; n++){
    if ( n%5 == 0 || n%3 == 0 ){    
    soma = soma + n
    
    }
}
console.log(soma)