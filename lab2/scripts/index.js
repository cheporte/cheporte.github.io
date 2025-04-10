const starters = [
{
    imageUrl: "./img/food/starters/fig-goat-cheese-crostini.jpg",
    name: "Fig & Goat Cheese Tartine",
    price: "8",
    ingredients: [
    "Fresh figs",
    "Goat cheese",
    "Baguette slices (toasted)",
    "Honey",
    "Thyme",
    "Crushed walnuts",
    "Olive oil"
    ]
},
{
    imageUrl: "./img/food/starters/carpaccio-de-betteraves-rouges.jpg",
    name: "Beet Carpaccio with Hazelnut Vinaigrette",
    price: "9",
    ingredients: [
    "Roasted red beets (thinly sliced)",
    "Arugula",
    "Crushed hazelnuts",
    "Hazelnut oil",
    "Sherry vinegar",
    "Dijon mustard",
    "Sea salt & black pepper"
    ]
},
{
    imageUrl: "./img/food/starters/french-onion-soup.jpg",
    name: "Classic French Onion Soup",
    price: "10",
    ingredients: [
    "Yellow onions (caramelized)",
    "Beef broth",
    "Butter",
    "Dry white wine",
    "Fresh thyme",
    "Bay leaf",
    "Gruyère cheese",
    "Baguette slices (toasted)"
    ]
}
];

const mains = [
{
    imageUrl: "./img/food/main-courses/coq-au-vin.jpeg",
    name: "Coq au Vin – Red Wine Braised Chicken",
    price: "18",
    ingredients: [
    "Bone-in chicken pieces",
    "Red wine (Burgundy preferred)",
    "Bacon lardons",
    "Carrots",
    "Pearl onions",
    "Mushrooms",
    "Garlic",
    "Thyme, bay leaf",
    "Chicken broth",
    "Flour (for thickening)"
    ]
},
{
    imageUrl: "./img/food/main-courses/seared-duck-breast-with-blackberry-jus.jpeg",
    name: "Seared Duck Breast with Blackberry Jus",
    price: "21",
    ingredients: [
    "Duck breasts",
    "Fresh blackberries",
    "Red wine",
    "Shallots",
    "Chicken stock",
    "Balsamic vinegar",
    "Butter",
    "Salt & black pepper"
    ]
},
{
    imageUrl: "./img/food/main-courses/mushroom-risotto-with-truffle-oil.jpg",
    name: "Wild Mushroom Risotto with Truffle Oil",
    price: "17",
    ingredients: [
    "Arborio rice",
    "Wild mushrooms (chanterelles, porcini, cremini)",
    "Shallots",
    "Garlic",
    "White wine",
    "Vegetable or chicken stock",
    "Parmesan cheese",
    "Butter",
    "Truffle oil",
    "Fresh parsley"
    ]
}
];

const desserts = [
{
    imageUrl: "./img/food/desserts/lavender-creme-brulee.jpeg",
    name: "Lavender Crème Brûlée",
    price: "8",
    ingredients: [
    "Heavy cream",
    "Dried culinary lavender",
    "Egg yolks",
    "Sugar",
    "Vanilla extract",
    "Brown sugar (for topping)"
    ]
},
{
    imageUrl: "./img/food/desserts/raspberry-mille-feuille.jpg",
    name: "Raspberry Mille-Feuille",
    price: "9",
    ingredients: [
    "Puff pastry",
    "Pastry cream (crème pâtissière)",
    "Fresh raspberries",
    "Powdered sugar",
    "Vanilla",
    "Whipped cream (optional)"
    ]
},
{
    imageUrl: "./img/food/desserts/dark-chocolate-tart-with-sea-salt.jpg",
    name: "Dark Chocolate Tart with Sea Salt",
    price: "8",
    ingredients: [
    "Dark chocolate (70%+)",
    "Heavy cream",
    "Butter",
    "Eggs",
    "Sugar",
    "Tart crust (pâte sucrée or shortbread)",
    "Flaky sea salt"
    ]
}
];
  

function fillMenuTable(dishes, sectionId) {
    const table = document.getElementById(sectionId);
    table.innerHTML = "";
  
    dishes.forEach((dish, i) => {
      table.insertAdjacentHTML("beforeend", `
        <tr>
          <td><img src="${dish.imageUrl}" alt="${dish.name}" style="width:80px"></td>
          <td>${dish.name}</td>
          <td>${dish.price}€</td>
          <td><button class="ingredients-btn" data-id="${sectionId}-${i}">Ingredients</button></td>
        </tr>
        <tr>
          <td colspan="4">
            <ul id="${sectionId}-${i}" style="display: none;">
              ${dish.ingredients.map(ing => `<li>${ing}</li>`).join("")}
            </ul>
          </td>
        </tr>
      `);
    });
  
    table.querySelectorAll(".ingredients-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const ul = document.getElementById(btn.dataset.id);
        ul.style.display = ul.style.display === "none" ? "block" : "none";
      });
    });
}

fillMenuTable(starters, "starters-table");
fillMenuTable(mains, "mains-table");
fillMenuTable(desserts, "desserts-table");

// Function to handle comment submission
document.getElementById("comment-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload

  // Get the comment text
  const commentText = document.getElementById("comment-text").value;

  // Create a new list item
  const newComment = document.createElement("li");

  // Create a paragraph element to hold the comment text
  const commentParagraph = document.createElement("p");
  commentParagraph.textContent = commentText;

  // Append the paragraph to the list item
  newComment.appendChild(commentParagraph);

  // Append the new comment to the comments list
  document.getElementById("comments-list").appendChild(newComment);

  // Clear the textarea after submission
  document.getElementById("comment-text").value = '';
});
