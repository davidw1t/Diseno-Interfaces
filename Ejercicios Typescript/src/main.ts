interface PersonajeLOR {
    nombre: string;
    pv:number
}

function curar(personaje:PersonajeLOR, vida:number){
  personaje.pv+=vida;
   console.log(personaje)
}


const nuevoPersonaje:PersonajeLOR={
    nombre:'Strider',
    pv: 50
}

curar(nuevoPersonaje, 40);

