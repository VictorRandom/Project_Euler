/*A Pythagorean triplet is a set of three natural numbers, <var>a ; b ; c, for which,
 a² + b² = c²
For example, 3² + 4² = 9 + 16 = 25 = 5².
There exists exactly one Pythagorean triplet for which a + b + c = 1000.Find the product abc.*/

var a = 1
var b = 2
var c = Math.sqrt(a*a + b*b)
soma = a + b + c

while(soma != 25)
{
    a++;
    b = a + 1;
}


console.log(`O produto é`+ a*b*c);















/*var a = 1
var b = 1
var c = 1

for (a = 0; a < 5; a++)
{
    for(b = 0; b < 5; b++)
    {
        for(c = 0; c < 6; c++)
        {
            if (a < b < c)
            {
                var A = a*a
                var B = b*b
                var C = c*c
                if (A + B == C)
                {
                    var soma = a + b + c
                    if (soma = 25)
                    {
                        console.log(`A = ${a}, B = ${b} e C = ${c}` );
                        var produto = a*b*c;
                        console.log(`O produto de a*b*c = ${produto} e soma ${soma}`);
                    }
                }
            }
        }
    }

}*/
