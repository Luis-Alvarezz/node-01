const frutas = ['manzana', 'pera', 'melon', 'sandia', 'jicama', 'platano', 'kiwi'];

frutas.forEach( fruta => {
   console.log(`Fruta: ${fruta}`);
});


// Declarar que se usara el arreglo de manera externa:
module.exports = frutas;