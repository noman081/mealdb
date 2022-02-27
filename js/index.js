const loadAllMeals = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
        .then(res => res.json())
        .then(data => displayAllMeals(data.meals));
}
loadAllMeals();

const displayAllMeals = meals => {
    // console.log(meals);
    const mealsContainer = document.getElementById('meals-container');

    meals.forEach(meal => {
        // console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        const imgUrl = meal.strMealThumb;
        const mealName = meal.strMeal;
        const mealInfo = meal.strInstructions;
        div.innerHTML = `
            <div class="card h-100">
                <img src="${imgUrl}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${mealName}</h5>
                    <p class="card-text">${mealInfo.slice(0, 250)}</p>
            </div>
        `;
        mealsContainer.appendChild(div);
    })
}

const loadSearchMeal = () => {
    const searchField = document.getElementById('search-text');
    const searchText = searchField.value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    console.log(url);
    searchField.value = '';
    document.getElementById('meals-container').textContent = '';
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchMeals(data.meals));
}
const displaySearchMeals = meals => {
    const mealsContainer = document.getElementById('meals-container');

    meals.forEach(meal => {
        // console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        const imgUrl = meal.strMealThumb;
        const mealName = meal.strMeal;
        const mealInfo = meal.strInstructions;
        div.innerHTML = `
            <div class="card h-100">
                <img src="${imgUrl}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${mealName}</h5>
                    <p class="card-text">${mealInfo.slice(0, 250)}</p>
            </div>
        `;
        mealsContainer.appendChild(div);
    })
}