// Function to search meals from MealDB API

function searchMeals() {

    // Get the meal name from the search box

    var mealName = document.getElementById("searchInput").value;

    // API URL with the searched meal name

    var web = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;

    // Fetch data from the API

    fetch(web)
    .then(response => response.json())  // Convert response into JSON
    .then(data => moreSteps(data));     // Send data to moreSteps function

}


// Function to display meal information on the webpage

function moreSteps(data) {

    // Get the meal container from HTML

    var mealContainer = document.getElementById("mealContainer");

    // Clear previous search results

    mealContainer.textContent = "";

    // Check if no meals are found

    if (data.meals == null) {
        mealContainer.textContent = "No meals found!";
        return;
    }

    // Display maximum 5 meals

    var total = Math.min(data.meals.length, 5);

    // Loop through the first 5 meals

    for (var a = 1; a <= total; a++) {

        // Create a new div for each meal

        var newDiv = document.createElement("div");

        // Add CSS class to the div

        newDiv.classList.add("meal-card");

        // Display meal name, image, category, and area

        newDiv.innerHTML = `
            <div>
                Meal Title: <b>${data.meals[a-1].strMeal}</b>
            </div>

            <div>
                <img src="${data.meals[a-1].strMealThumb}">
            </div>

            <div>
                Category: ${data.meals[a-1].strCategory}
            </div>

            <div>
                Area: ${data.meals[a-1].strArea}
            </div>
        `;

        // Add the new meal div to the meal container
        
        mealContainer.appendChild(newDiv);

    }

}