// debugger;
const dataContainer = document.getElementById('meals-container');
const loadAllData = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
        .then(res => res.json())
        .then(data => displayAllData(data.meals));
}
loadAllData();
const displayAllData = meals => {
    // const dataContainer = document.getElementById('meals-container');

    meals.forEach(meal => {
        const div = document.createElement('div');
        const imgUrl = meal.strMealThumb;
        const foodName = meal.strMeal;
        const details = meal.strInstructions;
        div.classList.add('col');
        div.innerHTML = `
            <div class="card h-100">
                <img src="${imgUrl}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${foodName}</h5>
                    <p class="card-text">${details.slice(0, 250)}</p>
                </div>
            </div>
        `;
        dataContainer.appendChild(div);
    })
}

const toggleSpinner = displayText => {
    document.getElementById('spinner').style.display = displayText;
}
const loadSearchFood = () => {
    toggleSpinner('block');
    const searchField = document.getElementById('search-text');
    const searchText = searchField.value;
    searchField.value = '';
    if (searchText.length <= 0) {
        document.getElementById('food-container').innerHTML = `
        <h1 class="text-muted text-center my-auto"> <span class="text-danger">Error...</span> <br>Please enter some food name.</h1>
        `;
        toggleSpinner('none');
        return;
    }
    // const dataContainer = document.getElementById('meals-container');
    dataContainer.textContent = '';
    document.getElementById('food-container').textContent = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayAllData(data.meals));

}
const displaySearchData = meals => {
    /* debugger;
    if (!meals) {
        document.getElementById('food-container').innerHTML = `
        <h1 class="text-muted text-center my-auto">Sorry. No food found! :(</h1>
        `;
        toggleSpinner('none');
        return;
    } */
    // const dataContainer = document.getElementById('meals-container');
    meals.forEach(meal => {
        const div = document.createElement('div');
        const imgUrl = meal.strMealThumb;
        const foodName = meal.strMeal;
        const details = meal.strInstructions;
        div.classList.add('col');
        div.innerHTML = `
            <div class="card h-100">
                <img src="${imgUrl}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${foodName}</h5>
                    <p class="card-text">${details.slice(0, 250)}</p>
                </div>
            </div>
        `;
        dataContainer.appendChild(div);
        toggleSpinner('none');
    })
}