
/* Readme for this code   Concepts Used createElement(It will create element just pass html tag here),textContent(Builtin javascript function to add text in the tag),appendChild(Builtin js Function to append text into the tag),setAttribute(Builtin javascript function to add attribute with its value in the tag), innerWidth(Builtin javascript function to get the width of the window),  EventListerner("resize") used in this project, Array, Array Method : forEach(Iterate throght the array)trim() biltin js function and it is used to remove space from both ends of the stringand trim() function will return new string without modifying the original string,if condition,&& operators, object, push function*/
/* all styling using css but in camel case */
// Container in which all the elements will be appended
const formContainer = document.createElement("div");
formContainer.style.padding = "30px";
formContainer.style.backgroundColor = "#f9f9f9";
formContainer.style.border = "1px solid #ccc";
formContainer.style.borderRadius = "5px";
formContainer.style.marginTop = "20px";
// Create heading
const headingTag = document.createElement("h1");
headingTag.textContent = "Add item";       
headingTag.style.fontSize = "1.5rem";      
headingTag.style.fontFamily = "Arial, sans-serif";
headingTag.style.marginBottom = "10px";

// Create input fields
const inputName = document.createElement("input");
inputName.setAttribute("type", "text");      
inputName.setAttribute("placeholder", "Enter Name");
inputName.style.padding = "10px";
inputName.style.marginBottom = "10px";
inputName.style.boxSizing = "border-box";
const inputCategory = document.createElement("input");
inputCategory.setAttribute("type", "text");
inputCategory.setAttribute("placeholder", "Enter Category");
inputCategory.style.padding = "10px";
inputCategory.style.marginBottom = "10px";
inputCategory.style.boxSizing = "border-box";
const inputYear = document.createElement("input");
inputYear.setAttribute("type", "text");
inputYear.setAttribute("placeholder", "Enter year");
inputYear.style.padding = "10px";
inputYear.style.marginBottom = "10px";
inputYear.style.boxSizing = "border-box";
// Create the Add Item button
const addButton = document.createElement("button");
addButton.textContent = "Add Item";
addButton.style.padding = "5px";
addButton.style.backgroundColor = "green";
addButton.style.color = "white";
addButton.style.border = "none";
addButton.style.borderRadius = "5px";
addButton.style.cursor = "pointer";
// Append elements to the form container
formContainer.appendChild(headingTag);
formContainer.appendChild(inputName);
formContainer.appendChild(inputCategory);
formContainer.appendChild(inputYear);
formContainer.appendChild(addButton);

// Append the form container to the createTable div
document.querySelector(".createTable").appendChild(formContainer);

// Function to apply responsive styles
function applyResponsiveStyles() {
    const windowWidth = window.innerWidth;

    if (windowWidth < 700) {
        formContainer.style.display = "flex";
        formContainer.style.flexDirection = "column";
        formContainer.style.rowGap = "20px";
        inputName.style.width = "100%";
        inputCategory.style.width = "100%";
        inputYear.style.width = "100%";
        addButton.style.width = "100%";
    } else {
        formContainer.style.display = "flex";
        formContainer.style.justifyContent = "space-between";
        inputName.style.width = "auto";
        inputCategory.style.width = "auto";
        inputYear.style.width = "auto";
        addButton.style.width = "auto";
    }
}
// Initial call to set the styles based on the current window width
applyResponsiveStyles();

// Event listener for window resize
window.addEventListener("resize", applyResponsiveStyles);


// Creating the table structure
    const tableContainer = document.createElement('div');        /* Creating table container */
    tableContainer.style.marginTop = "20px";                     

    const table = document.createElement('table');                /* creating table  */
    table.style.width = "100%";
    table.style.borderCollapse = "collapse";

    // Creating table header
    // ---------------------------------------------------Start Creating of the Table Header (Upper green line of table)------------------------------------
    const thead = document.createElement('thead');              /* creating table header */
    const headerRow = document.createElement('tr');                /* Creating the table row */

    const headers = ['S.no', 'Name', 'Category', 'Year','Select', 'Edit Entry', 'Delete Entry'];    /*Just array */
    headers.forEach(header => {
        const th = document.createElement('th'); /* Creation of th for each header element */
        th.textContent = header;              /* inserting header text */
        th.style.border = "1px solid #ccc";
        th.style.padding = "10px";
        th.style.backgroundColor = "#7fff00";
        headerRow.appendChild(th);     /* appending all th into the  table row */
    });

thead.appendChild(headerRow);    /* Append the table row to the table header */
table.appendChild(thead);       /* Append the table header to the table */

// ---------------------------------------------------End Creating of the Table Header (Upper green line of table)------------------------------------

const tbody = document.createElement('tbody');   /* Creation of table body */
table.appendChild(tbody);                       /* Appendtable body to the table */

tableContainer.appendChild(table);              /* Append table into the table container */
document.querySelector(".createTable").appendChild(tableContainer);    /* Append table Container into the html page inside the createTable div */

// Store items in an array
let items = [];

// Add item function
function addItem() {     
    const name = inputName.value.trim();   /* trim() function will used to avoid extra space unintetionally enter by the user */     
    const category = inputCategory.value.trim();
    const year = inputYear.value.trim();

    if (name && category && year) {
        const item = {                       /* If user enter all of these values then these values will store in the object later push into the string items*/
            name,
            category,
            year,
        };

        items.push(item);
        displayItems(items);

        // Clear the input fields after adding an item
        inputName.value = '';
        inputCategory.value = '';
        inputYear.value = '';
    }
}

// Display items in the table
function displayItems(items) {
tbody.innerHTML = ''; // Clear the table body first

/* items terversal (items added by the user) */
items.forEach((item, index) => {   /* Iterate all the items */
const row = document.createElement('tr'); /* Create table row tag */

const snoCell = document.createElement('td');
snoCell.textContent = index + 1;
snoCell.style.border = "1px solid #ccc";
snoCell.style.padding = "10px";

const nameCell = document.createElement('td');
nameCell.textContent = item.name;
nameCell.style.border = "1px solid #ccc";
nameCell.style.padding = "10px";

const categoryCell = document.createElement('td');
categoryCell.textContent = item.category;
categoryCell.style.border = "1px solid #ccc";
categoryCell.style.padding = "10px";

const yearCell = document.createElement('td');
yearCell.textContent = item.year;
yearCell.style.border = "1px solid #ccc";
yearCell.style.padding = "10px";
// Checkbox cell
const selectCell = document.createElement('td');
selectCell.style.border = "1px solid #ccc";
selectCell.style.padding = "10px";
const checkbox = document.createElement('input');
checkbox.setAttribute('type', 'checkbox');
checkbox.style.cursor = "pointer";

// Event listener for checkbox to line-through the row
checkbox.addEventListener('click', function () {
    if (checkbox.checked) {
        row.style.textDecoration = "line-through";
    } else {
        row.style.textDecoration = "none";
    }
});
selectCell.appendChild(checkbox);
 /* creation of editcell with styling and icon */
const editCell = document.createElement('td');
editCell.style.border = "1px solid #ccc";
editCell.style.padding = "10px";
/* Until here we have created the table structure  */
const editButton = document.createElement('button');
editButton.innerHTML = "&#9998;"; // Pencil emoji for edit
editButton.style.cursor = "pointer";
editButton.addEventListener('click', () => editItem(index));        /* When click on the edit button then edit function will call */
editCell.appendChild(editButton);                     
/* Creation of delete cell */
const deleteCell = document.createElement('td');
deleteCell.style.border = "1px solid #ccc";
deleteCell.style.padding = "10px";
const deleteButton = document.createElement('button');
deleteButton.innerHTML = "&#10060;"; // Cross emoji for delete
deleteButton.style.cursor = "pointer";
deleteButton.addEventListener('click', () => deleteItem(index));
deleteCell.appendChild(deleteButton);

// Append the cells to the row
row.appendChild(snoCell);
row.appendChild(nameCell);
row.appendChild(categoryCell);
row.appendChild(yearCell);
row.appendChild(selectCell);
row.appendChild(editCell);
row.appendChild(deleteCell);


tbody.appendChild(row);
});
}

// Function to delete an item
function deleteItem(index) {
items.splice(index, 1);  /* Remove the specified items from the list */
displayItems(items);
}

// Function to edit an item
function editItem(index) {
const item = items[index];
inputName.value = item.name;
inputCategory.value = item.category;
inputYear.value = item.year;
// Remove the item being edited from the list temporarily
deleteItem(index);
// On clicking 'Add Item', the edited item will be added again
}

// Event listener for adding items
addButton.addEventListener('click', addItem);