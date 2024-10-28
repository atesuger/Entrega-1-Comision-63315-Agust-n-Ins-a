let opcion = Number(prompt("Seleccione una opción \n1 - Sumar dos numeros\n2 - Contar hasta 10\n3 - Verificador de valor\n0 - Salir"))

while(opcion != 0){
    if(opcion == 1){
        let a = Number(prompt("Ingrese un numero"))
        let b = Number(prompt("Ingrese otro numero"))

        let resultado = sumar(a, b);
        alert("La suma es: " + resultado);
    }
    if(opcion == 2){
        for (let i = 1; i <= 10; i++) {
            alert(i);
        }
    }
    if (opcion == 3) {
        let numero = Number(prompt("Ingrese un número"));
    
        if (isNaN(numero)) {
            alert("Esto no es un número");
        } else {
            if (numero < 0) {
                alert("El número es negativo");
            } else if (numero > 0) {
                alert("El número es positivo");
            } else {
                alert("El número es cero");
            }
        }
    }
    opcion = Number(prompt("Seleccione una opción \n1 - Sumar dos numeros\n2 - Contar hasta 10\n3 - Verificador de valor\n0 - Salir"))
}

function sumar(a, b) {
    return a + b;
}