function Sumar(numero1, numero2)  {
    const resultado = numero1 + numero2;
    console.log(resultado);
    return resultado;
};

Sumar(7, 10);

function Restar(numero1, numero2)  {
    const resultado = numero1 - numero2;
    console.log(resultado);
    return resultado;
};
Restar(12, 5);


function CalcularPromedio(numero1, numero2) {
    const total = Sumar(numero1, numero2);
    console.log(total/2);
};

CalcularPromedio(26, 2);

function NumeroMayor(numero1, numero2) {
   return (`${numero1}>${numero2} ? ${numero1} : ${"nunero2"}`)
}

NumeroMayor(15, 18);