const multiplicar =(numero: number, base: number = 3, otroNumero?: number): number =>{

      return numero*base;
}

const resultado1: number = multiplicar(2,undefined,3);
console.log(resultado1);

const resultado2: number = multiplicar(3);
console.log(resultado2);

const resultado3: number = multiplicar(2,4,3);
console.log(resultado3);

const resultado4: number = multiplicar(4,undefined);
console.log(resultado4);