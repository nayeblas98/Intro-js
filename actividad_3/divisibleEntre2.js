//Determinar si un número es divisible entre dos//

var num = Number(prompt("Ingrese un número"));

if(num % 2 == 0){
    console.log(`El número ${num} es divisible entre 2.`)
} else {
    console.log(`El número ${num} no es divisible entre 2.`)
}