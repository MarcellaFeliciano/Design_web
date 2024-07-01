let library = [
    {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    libraryID: 1254
    },
    {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryID: 4264
    },
    {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryID: 3245
    }];

lista = []

console.log(library[0].libraryID)

for (i=0; i<=library.length; i++) {
    let valor = library[i];
    v_list = valor.libraryID;

    lista.push(v_list)
    
    
}