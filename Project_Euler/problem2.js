var n1 = 0
var n2 = 1
var soma = 0

for (var c = 1 ; c <= 4000000 ; c = n1 + n2){
    n1 = n2
    n2 = c
    if (c%2 == 0){  // pares
    soma = soma + c
    }
    
}

console.log(soma)



/*
var n1 = 0
var n2 = 1
var soma = 0

for (var c = 1 ; c <= 4000000 ; c = n1 + n2){
    var n1 = n2
    var n2 = c
    
    var soma = soma + c
    
}

console.log(soma)
*/


/* 
1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 
n1
n2
n3 = n1+n2
n4 = n2+n3
n5 = n3+n4
n6 = n4+n5
...

a -> b
b -> c
c = a + b

-, a, b, c
1, 2, 3, 5
a = 2
b = 3
c = 5

*/