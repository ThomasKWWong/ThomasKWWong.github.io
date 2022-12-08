const ingredientList = document.getElementById("ingredientList");
let hpIngredients = [];
let searchString = "";
let filteredIngredients = [];

const searchBar = document.getElementById("searchBar");

searchBar.addEventListener('input', (e) => {
    console.log(e.target.value);
    searchString = e.target.value.toLowerCase();
    filteredIngredients = hpIngredients.filter( ingredient => {
        return ingredient.name.toLowerCase().includes(searchString);
    })
    console.log(filteredIngredients);
});

document.getElementById("search-btn").addEventListener("click", function() {
    console.log(filteredIngredients);
    displayIngredients(filteredIngredients);
});

document.addEventListener("keypress", function(event) {
    if (event.keyCode == 13) {
        displayIngredients(filteredIngredients);
    }
})

const loadIngredients = async () => {
    try {
        const res = await fetch('https://cors-anywhere.herokuapp.com/https://ingredifreshapinodejs.herokuapp.com/ingredients');
        hpIngredients = await res.json();
        displayIngredients(hpIngredients);
    } catch(err) {
        console.error(err);
    }
};



const displayIngredients = (ingredients) => {
    const htmlString = ingredients
        .map((ingredient) => {
            return `
            <li class ="ingredient">
                <h2>${ingredient.name}</h2>
                <p>Bad if: ${ingredient.condition}</p>
                <img src="${ingredient.image}"></img>
            </li>
            `;
        })
        .join('');
    ingredientList.innerHTML = htmlString;
};


loadIngredients();