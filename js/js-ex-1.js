
const categoryList = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoryList.length}`);

categoryList.forEach(category => {
    const title = category.querySelector("h2").textContent;
    const elements = category.querySelectorAll("li");
    console.log(`Category: ${title}`);
    console.log(`Elements: ${elements.length}`);
})
