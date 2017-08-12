
let bromotionCardObject = {
	name: "Shape-up Shoes",
	price: "Starting at $799",
	img: "img/shapeup_shoes.jpg",
	description: "Picking up the ladies has never been so easy when you have the support you need where it counts most – below the belt.",
	rating: "Rated 10/10"
};

let bromotionCardHTML = document.querySelector("#bromotionCard");
// console.log(bromotionCardHTML)
let productsButton = document.querySelector('#productsButton');

function printBromotionCardToDom() {
	let cardString = "";
	cardString += '<img src="' + bromotionCardObject.img + '"</img>';
	cardString += '<h2>' + bromotionCardObject.name + '</h2>';
	cardString += '<p>' + bromotionCardObject.description + '</p>';
	cardString += '<h4>' + bromotionCardObject.price + '</h4>';
	cardString += '<h5>' + bromotionCardObject.rating + '</h5>';

	return cardString;
};

function productsLink() {
	window.location='products.html';
}

bromotionCardHTML.innerHTML = printBromotionCardToDom();
productsButton.addEventListener('click', function() {productsLink()})

