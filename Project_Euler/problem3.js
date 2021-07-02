

function Primo(n){
    var c = 2
    while(n/c != 1){
        if ( n%c === 0){
            n = n / c    
            console.log(c)
        } else {
            c++
            
        }
    
    }
    console.log(c)
}

Primo(600851475143) 


/*
n/c = r
24/2 = 12  --- n/c = r
12/c = 6 ----> r/c = n
*/

/*
24 = 24/2 + 12/2 + 6/2 + 3/3
24 = 2^3 * 3
*/



/* Tentativa 2
for (c = 2 ; c < n ; c++){
    r = n/c
    while (n%c == 0){
        r = n/c
        if (r != 1) {            
            c != c
            while (r != 1){
                r = n/c

            
        }
    } else {
        console.log (c)
    } 
    
   
    }
    console.log (c)

} 
*/




/* Tentativa 1
var n = 13195
for (c = 1 ; c < n ; c++){
      
        if(n%c == 0){
        console.log(c)
              
        }
        
}
*/