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
        const mealId = meal.idMeal;
        div.innerHTML = `
            <div onclick="loadMealInfo(${mealId})" class="card h-100">
                <img src="${imgUrl}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${mealName}</h5>
                    <p class="card-text">${mealInfo.slice(0, 250)}</p>
            </div>
        `;
        mealsContainer.appendChild(div);
    })
}

const toggleSpinner = displayText => {
    document.getElementById('spinner').style.display = displayText;
}

const loadSearchMeal = () => {
    toggleSpinner('block');
    const searchField = document.getElementById('search-text');
    const searchText = searchField.value;
    mealInfoContainer = document.getElementById('meal-info').textContent = '';
    if (!searchText) {
        const mealsContainer = document.getElementById('meals-container');
        mealsContainer.innerHTML = `
                <div class="col">
                </div>
                <div class="col">
                    <h1 class="text-center text-muted">Please enter meal name!</h1>
                </div>
            
            `;
        toggleSpinner('none');
        return;
    }
    else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        console.log(url);
        searchField.value = '';
        document.getElementById('meals-container').textContent = ' ';
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchMeals(data.meals));
    }
}
const displaySearchMeals = meals => {
    const mealsContainer = document.getElementById('meals-container');
    if (!meals) {
        mealsContainer.innerHTML = `
            <div class="col">
            </div>
            <div class="col">
                <h1 class="text-center text-muted">Sorry. No meals found! :(</h1>
            </div>
        
        `;
        toggleSpinner('none');
        return;
    }
    meals.forEach(meal => {
        // console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        const imgUrl = meal.strMealThumb;
        const mealName = meal.strMeal;
        const mealInfo = meal.strInstructions;
        const mealId = meal.idMeal;
        // console.log(mealId);
        div.innerHTML = `
            <div onclick= "loadMealInfo(${mealId})" class="card h-100">
                <img src="${imgUrl}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${mealName}</h5>
                    <p class="card-text">${mealInfo.slice(0, 250)}</p>
            </div>
        `;
        mealsContainer.appendChild(div);
        toggleSpinner('none');
    })
}

const loadMealInfo = mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealInfo(data.meals[0]));
}

const displayMealInfo = meal => {
    debugger;
    const mealInfoContainer = document.getElementById('meal-info');
    const div = document.createElement('div');
    mealInfoContainer.textContent = '';
    const imgUrl = meal.strMealThumb;
    const mealName = meal.strMeal;
    const mealInfo = meal.strInstructions;
    div.innerHTML = `
        <div class="card mx-auto w-75">
            <img src="${imgUrl}" class="card-img-top mx-auto mt-3 info-img" alt="...">
            <div class="card-body">
                <h5 class="card-title text-center">${mealName}</h5>
                <p class="card-text">${mealInfo}</p>
                <a href="#" class="btn btn-primary mx-auto">Watch recepie</a>
            </div>
        </div>
    `;
    mealInfoContainer.appendChild(div);
}