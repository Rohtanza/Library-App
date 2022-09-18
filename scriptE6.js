console.log('this is E6 version of library project!');

class book{
    constructor(name, author, type){
        this.name = name;
        this.author = author;
        this.type = type;
    }
}
class display{
        add(book){
        console.log('adding to ui');
        tableBody = document.getElementById('tableBody');
        let uiString = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                        </tr>`
            tableBody.innerHTML += uiString;
    }
    clear = function(){
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }
}