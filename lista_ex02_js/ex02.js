let library = [
    {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
    },
    {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
    },
    {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false
    }];





for (i=0; i<3; i++) {
    console.log('=====================================================')
    let book = library[i];
    console.log('- Livro '+i+' -')
    console.log('Nome: '+ book['title'])
    console.log('Author: '+ book['author'])
    console.log('Status de leitura: '+ book['readingStatus'])
}
