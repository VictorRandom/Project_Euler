function eDivisivel(numero)
{
    for(divisor = 2; divisor <= 20; divisor ++){
    if (numero % divisor == 0){
        continue;
    } else {
        return false;
        }
    }
    return true
}

var numero = 1;
do
{
    numero++;
}
while(! eDivisivel(numero))

console.log(numero);



/*for (a = 0; a < 1000000; a++)
{
    for (divisor = 1; divisor =< 20; divisor++)
    {
        if (a % divisor == 0)
        {
            console.log(a)
        }
    }
}*/

