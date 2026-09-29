interface Producto{

    descripcion:string;
    precio:number;
}

const telefono: Producto = {
    descripcion: 'Iphone',
    precio: 500
};

const tablet: Producto = {
    descripcion: 'Mac10',
    precio: 800
};


function sumaProductos(productos: Producto[]):number{

    let total = 0;

    productos.forEach(articulo=>{
        total+=articulo.precio;
    });
    return total*0.15;
}


const articulos: Producto[] = [telefono,telefono,tablet];

const calcularISV = sumaProductos(articulos);

console.log(calcularISV);