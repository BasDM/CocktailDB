//cocktail lookup

const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const ulEl = document.querySelector("ul");

buttonEl.onclick = async function () {
  const val = inputEl.value;
  const response = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + val
  );
  const data = await response.json();
  let html = "";
  data.drinks.forEach((drink)=>{
    html+=  `<li>
                <div><img src="${drink.strDrinkThumb}"/></div>
                ${drink.strDrink}
            </li>`;
  });
  ulEl.innerHTML = html;
};
