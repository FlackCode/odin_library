const myLib = [];
let table = document.getElementById(`table`);
let form = document.getElementById(`form`);
let title = document.getElementById(`title`);
let author = document.getElementById(`author`);
let pages = document.getElementById(`pages`);
let isRead;
function readStatus(){
    let readYes = document.getElementById('readYes');
    let readNo = document.getElementById('readNo');
    if (readYes.checked) {
        return 'Yes';
    } else if (readNo.checked) {
        return 'No';
    }
}
function Book(title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}
function addBookToLibrary(){
    const newBook = new Book(title.value, author.value, pages.value, isRead);
    myLib.push(newBook);
    return myLib;
}

function addBookToTable(){
    event.preventDefault();
    let isRead = readStatus();
    let row = table.insertRow(-1);
    for(let i = 0; i<4; i++){
        let cell = row.insertCell(i);
        switch(i){
            case 0:
                cell.innerHTML = title.value;
                break;
            case 1:
                cell.innerHTML = author.value;
                break;
            case 2:
                cell.innerHTML = pages.value + ` Pages`;
                break;
            case 3:
                cell.innerHTML = isRead;
                break;
        }
    }
    addBookToLibrary();
    console.log(myLib);
    form.reset();
}
form.addEventListener(`submit`, addBookToTable);