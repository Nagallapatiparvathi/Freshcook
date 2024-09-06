function toggleRecipe(recipeId, show) {
  // Get all recipe details elements
  const allDetails = document.querySelectorAll('.recipe-details');
  // Get all more and less buttons
  const allMoreButtons = document.querySelectorAll('.more-btn');
  const allLessButtons = document.querySelectorAll('.less-btn');
  
  // Loop through all recipe details to hide them
  allDetails.forEach(detail => {
    if (detail.id === recipeId) {
      detail.style.display = show ? 'block' : 'none';
    } else {
      detail.style.display = 'none';
    }
  });

  // Loop through all more and less buttons to update their visibility
  allMoreButtons.forEach(button => {
    if (button.onclick.toString().includes(recipeId)) {
      button.style.display = show ? 'none' : 'inline-block';
    } else {
      button.style.display = 'inline-block';
    }
  });

  allLessButtons.forEach(button => {
    if (button.onclick.toString().includes(recipeId)) {
      button.style.display = show ? 'inline-block' : 'none';
    } else {
      button.style.display = 'none';
    }
  });
  // Function to handle the search functionality
function searchRecipes() {
  const input = document.getElementById('inpt_search').value.toLowerCase();
  const recipes = document.querySelectorAll('.recipe-container');
  let found = false;

  recipes.forEach(recipe => {
    const title = recipe.querySelector('h3').textContent.toLowerCase();
    if (title.includes(input)) {
      recipe.style.display = 'block';
      found = true;
    } else {
      recipe.style.display = 'none';
    }
  });

  const noResult = document.getElementById('noResult');
  noResult.style.display = found ? 'none' : 'block';
}

// Add event listener for input change
document.getElementById('inpt_search').addEventListener('input', searchRecipes);

// Function to toggle recipe details
function toggleRecipe(recipeId, show) {
  // Get all recipe details elements
  const allDetails = document.querySelectorAll('.recipe-details');
  // Get all more and less buttons
  const allMoreButtons = document.querySelectorAll('.more-btn');
  const allLessButtons = document.querySelectorAll('.less-btn');
  
  // Loop through all recipe details to hide them
  allDetails.forEach(detail => {
    if (detail.id === recipeId) {
      detail.style.display = show ? 'block' : 'none';
    } else {
      detail.style.display = 'none';
    }
  });

  // Loop through all more and less buttons to update their visibility
  allMoreButtons.forEach(button => {
    if (button.onclick.toString().includes(recipeId)) {
      button.style.display = show ? 'none' : 'inline-block';
    } else {
      button.style.display = 'inline-block';
    }
  });

  allLessButtons.forEach(button => {
    if (button.onclick.toString().includes(recipeId)) {
      button.style.display = show ? 'inline-block' : 'none';
    } else {
      button.style.display = 'none';
    }
  });
}

}
