const habilidades:string[]=['Bash', 'Counter', 'Healing'];

interface Personaje{
    nombre:string;
    hp:number;
    habilidades:string[];
    puebloNatal?:string;
}



const personaje:Personaje={

    nombre: 'Levan',
    hp: 200,
    habilidades: ['Counter', 'Healing'],
    
}

const personaje2:Personaje ={

    nombre: 'David',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing'],
    puebloNatal:'Pueblo Paleta'
}

console.table(personaje2);
console.log(personaje);