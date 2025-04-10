const закуски = [{
    imageUrl: "./img/food/starters/fig-goat-cheese-crostini.jpg",
    name: "Тартін з інжиром та козячим сиром",
    price: "182",
    ingredients: [
        "Свіжий інжир",
        "Козячий сир",
        "Скибочки багета (підсмажені)",
        "Мед",
        "Тим’ян",
        "Подрібнені волоські горіхи",
        "Оливкова олія"
    ]
},
{
    imageUrl: "./img/food/starters/carpaccio-de-betteraves-rouges.jpg",
    name: "Карпаччо з буряка з горіховою заправкою",
    price: "205",
    ingredients: [
        "Запечений червоний буряк (тонко нарізаний)",
        "Рукола",
        "Подрібнені лісові горіхи",
        "Олія з лісового горіха",
        "Оцет хересний",
        "Гірчиця діжонська",
        "Морська сіль та чорний перець"
    ]
},
{
    imageUrl: "./img/food/starters/french-onion-soup.jpg",
    name: "Класичний французький цибулевий суп",
    price: "225",
    ingredients: [
        "Жовта цибуля (карамелізована)",
        "Яловичий бульйон",
        "Вершкове масло",
        "Сухе біле вино",
        "Свіжий тим’ян",
        "Лавровий лист",
        "Сир грюйєр",
        "Скибочки багета (підсмажені)"
    ]
}];

const основні = [{
    imageUrl: "./img/food/main-courses/coq-au-vin.jpeg",
    name: "Coq au Vin – Курка, тушкована у вині",
    price: "410",
    ingredients: [
        "Курка з кісткою (частини)",
        "Червоне вино (бажано Бургундія)",
        "Шматочки бекону (лардони)",
        "Морква",
        "Цибуля шалот або перлова",
        "Гриби",
        "Часник",
        "Тим’ян, лавровий лист",
        "Курячий бульйон",
        "Борошно (для загущення)"
    ]
},
{
    imageUrl: "./img/food/main-courses/seared-duck-breast-with-blackberry-jus.jpeg",
    name: "Смажена качина грудка з ожиновим соусом",
    price: "478",
    ingredients: [
        "Качині грудки",
        "Свіжа ожина",
        "Червоне вино",
        "Цибуля шалот",
        "Курячий бульйон",
        "Бальзамічний оцет",
        "Вершкове масло",
        "Сіль та чорний перець"
    ]
},
{
    imageUrl: "./img/food/main-courses/mushroom-risotto-with-truffle-oil.jpg",
    name: "Різотто з лісовими грибами та трюфельною олією",
    price: "390",
    ingredients: [
        "Рис арборіо",
        "Лісові гриби (лисички, порчіні, креміні)",
        "Цибуля шалот",
        "Часник",
        "Біле вино",
        "Овочевий або курячий бульйон",
        "Сир пармезан",
        "Вершкове масло",
        "Трюфельна олія",
        "Свіжа петрушка"
    ]
}];

const десерти = [{
    imageUrl: "./img/food/desserts/lavender-creme-brulee.jpeg",
    name: "Лавандовий крем-брюле",
    price: "182",
    ingredients: [
        "Вершки",
        "Сушена кулінарна лаванда",
        "Жовтки",
        "Цукор",
        "Екстракт ванілі",
        "Коричневий цукор (для скоринки)"
    ]
},
{
    imageUrl: "./img/food/desserts/raspberry-mille-feuille.jpg",
    name: "Тисяча листів з малиною (мільфей)",
    price: "205",
    ingredients: [
        "Листкове тісто",
        "Крем-патіс’є (заварний крем)",
        "Свіжа малина",
        "Цукрова пудра",
        "Ваніль",
        "Збиті вершки (опційно)"
    ]
},
{
    imageUrl: "./img/food/desserts/dark-chocolate-tart-with-sea-salt.jpg",
    name: "Тарт з темного шоколаду та морською сіллю",
    price: "182",
    ingredients: [
        "Темний шоколад (70%+)",
        "Вершки",
        "Вершкове масло",
        "Яйця",
        "Цукор",
        "Тартова основа (пісочне тісто)",
        "Морська сіль (флер де сель)"
    ]
}];

function fillMenuTable(dishes, sectionId) {
    const table = document.getElementById(sectionId);
    table.innerHTML = "";
  
    dishes.forEach((dish, i) => {
      table.insertAdjacentHTML("beforeend", `
        <tr>
          <td><img src="${dish.imageUrl}" alt="${dish.name}" style="width:80px"></td>
          <td>${dish.name}</td>
          <td>${dish.price}€</td>
          <td><button class="ingredients-btn" data-id="${sectionId}-${i}">Інгредієнти</button></td>
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

fillMenuTable(закуски, "starters-table");
fillMenuTable(основні, "mains-table");
fillMenuTable(десерти, "desserts-table");

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