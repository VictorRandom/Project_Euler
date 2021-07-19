function eprimo(valor){
    for (var numero = 2; numero < valor ; numero++){
        if(valor % numero == 0){
        return false
        }
        return true
    }
    
}

function contando(valor){
    var contagem = 0
    var incremento = 2
    while (contagem < valor){
        if(eprimo(incremento)){
            contagem++
            console.log (contagem)
        }
        incremento++
    }
    return incremento - 1
}

console.log(contando(10001))






/*
function NumeroPrimo(valor){
    if (primo) primo.push(numero)
    for ( var numero = 2 ; valor >= numero ; numero ++){
        var primo = []
        primo = true
        


        for (var divisor = 2; divisor < numero; divisor++){
            if( numero % divisor == 0){
                primo = false
                break
            }
        }
    
    
    if (primo) console.log(numero)

    }

}


NumeroPrimo(13)
*/