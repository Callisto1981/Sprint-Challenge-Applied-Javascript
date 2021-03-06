// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector(".cards-container");

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    console.log(response);
    const newArray = Object.values(response.data.articles);
    newArray.forEach(element => {
      element.forEach(item => {
        cardsContainer.append(card(item));
      });
    });
  })
  .catch(error => {
    console.log("error", error);
  });

function card(obj) {
  const cardDiv = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const authorName = document.createElement("span");

  headline.textContent = "Name: " + obj.headline;
  img.src = obj.authorPhoto;
  authorName.textContent = "By: " + obj.authorName;

  cardDiv.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");
  img.classList.add("img");
  authorName.classList.add("authorName");

  cardDiv.append(headline);
  cardDiv.append(author);

  author.append(imgContainer);
  imgContainer.append(img);
  author.append(authorName);

  return cardDiv;
}
