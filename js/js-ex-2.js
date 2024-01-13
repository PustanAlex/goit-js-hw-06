const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];


  const listItems = [];

ingredients.forEach(ingredient => {
    const item = document.createElement("li");
    item.textContent = ingredient;
    item.classList.add("item");
    listItems.push(item);
})
const ulIngredients = document.getElementById("ingredients");

ulIngredients.append(...listItems);