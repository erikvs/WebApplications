// OPPGAVE 1

//Getting the delete button.
let deleteButton =  document.getElementById("remove-btn");
//Getting the element to delete.
let toBeDeleted = document.getElementById("remove");
//Event listener and on click delete function.
deleteButton.addEventListener('click', () => {
    toBeDeleted.remove();

});

// OPPGAVE 2

//Getting the change button.
let changeButton =  document.getElementById("change-btn");
//Getting the element to change.
let toBeChanged = document.getElementById("change");
//Event listener and on click change function.
changeButton.addEventListener('click', () => {
    toBeChanged.textContent = "Hello World";

});

// OPPGAVE 3

//Getting the input field
let inputField = document.getElementById("input");
//Event listener and console log what has been input
inputField.addEventListener("input", (event) => {
    event.preventDefault();
    console.log(inputField.value);
});

// OPPGAVE 4

const myList = ['item one', 'item two', 'item three'];
//Getting the print button
let printButton =  document.getElementById("write-list");
//Event listener and on click console log function.
printButton.addEventListener('click', () => {
    myList.forEach((element) => {
        console.log(element);
})
});

// OPPGAVE 5

//Getting the drop down menu.
let dropDown =  document.getElementById("select");
//Getting the input field.
let inputField2 = document.getElementById("text");
//Getting the create button.
let createButton =  document.getElementById("create");
//Getting place to put new element.
let newPlace = document.getElementById("placeholder")
//Event listener and on click create new element function.
createButton.addEventListener('click', () => {
    console.log(dropDown.value);
    //Create new element of selected type.
    const newField = document.createElement(select.value);
    //Text to put in new element.
    newField.textContent = inputField2.value; 
    //Place new element in selected place.
    placeholder.appendChild(newField);
    });

// OPPGAVE 6

//Getting the list.
let listToDelete = document.getElementById("list");
//Getting the delete button.
let deleteButton2 = document.getElementById("remove-li");
//Event listener and on click remove element function.
deleteButton2.addEventListener("click", () =>{
if (listToDelete.firstChild){
    listToDelete.removeChild(listToDelete.firstChild);
}
});

// OPPGAVE 7

//Getting the input field.
let newField2 = document.getElementById("name");
//Getting button to disable.
let disableButton = document.getElementById("order")
//Event listener and on click disable button function.
newField2.addEventListener("keypress", (event) => {
if (newField2.value.length > 3){
    console.log(newField2.value.length);
    disableButton.style.borderBlockColor = "#DC143C";
}
});

// OPPGAVE 8

// Generate HTML collection based on ul content.
const elementsToChange = document.getElementsByClassName("children")[0].children;
// Generate Array from collection.
const arrayToChange = Array.from(elementsToChange);
// Getting the colour button.
const colourButton = document.getElementById("color");
// Event listener and on click to give border with colour.
colourButton.addEventListener('click', () => {
    console.log(arrayToChange);
    arrayToChange.forEach((element, index) => {
        (index % 2 == 0) ? 
            elementsToChange.item(index).style.border = "thick solid #FF1493" 
            : elementsToChange.item(index).style.border = "thick solid #7FFF00";
})
});