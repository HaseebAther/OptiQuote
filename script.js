const quotebtn = document.getElementById("getquote");
const quotes = document.getElementById("quotes");
const copybtn = document.getElementById("copy");
const quotebtns = document.querySelectorAll(".quotes-btn");
const hamburger = document.getElementById("hamburger");
const navlinks = document.getElementById("nav-links");
const favbtn = document.getElementById("favorite-btn");
const favlist = document.getElementById("fav_list");

//menu setup
hamburger.addEventListener("click", () => {
  navlinks.classList.toggle("show");
});

//category quotes
quotebtns.forEach((nbtn) => {
  nbtn.addEventListener("click", () => {
    const category = nbtn.id;
    getcategoryQuote(category);
  });
});

// listners
window.addEventListener("DOMContentLoaded", getQuote);

quotebtn.addEventListener("click", getQuote);
copybtn.addEventListener("click", copyquotes);

// api functions
async function getQuote() {
  try {
    const res = await fetch(
      "https://cors-anywhere.herokuapp.com/https://quote-generator-api-six.vercel.app/api/quotes/random"
    );
    const data = await res.json();
    quotes.innerText = data.quote;
    loadfavorites();
  } catch (err) {
    console.log("Error fetching quote:", err);
  }
}

async function getcategoryQuote(category) {
  try {
    const res = await fetch(
      `https://cors-anywhere.herokuapp.com/https://quote-generator-api-six.vercel.app/api/quotes/random?category=${category}`
    );
    const data = await res.json();
    quotes.innerText = data.quote;
  } catch (err) {
    console.log("Error fetching quote:", err);
  }
}

//copy quotes
async function copyquotes() {
  try {
    navigator.clipboard.writeText(quotes.innerText);

    console.log(quotes.innerText);

    quotes.classList.add("flash");
    setTimeout(() => quotes.classList.remove("flash"), 600);
  } catch (err) {
    console.log("Error Copying quote:", err);
  }
}

favbtn.addEventListener("click", () => {
  let quote = quotes.innerText;

  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  if (!favorites.includes(quote)) {
    favorites.push(quote);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    loadfavorites();
  }
});
let loadfavorites = () => {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  favlist.innerHTML = "";
  favorites.forEach((q, index) => {
    let li = document.createElement("li");
    li.textContent = q;

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "❌";
    removeBtn.style.marginLeft = "10px";
    removeBtn.classList.add('favbtn')
    removeBtn.addEventListener("click", () => {
      removeFavorite(index);
    });
   
    favlist.appendChild(li);
     li.appendChild(removeBtn); 
  });
};
let removeFavorite = (index) =>{
      let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      favorites.splice(index,1)
    localStorage.setItem("favorites", JSON.stringify(favorites));
    loadfavorites();
}