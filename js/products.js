
var broProductArray = [];

var product1 = {
	name: "Vapeinator Vape Pen",
	price: "$1000",
	img: "img/vape_pens.jpg",
	description: "Need to write something down? We've got you covered, but first, take a puff off the Vapeinator 1500! Comes preloaded with Broberry Pie flavor.",
	rating: "10/10"
};
var product2 = {
	name: "Hoverbro 2017",
	price: "$47,000",
	img: "img/hoverboard.jpg",
	description: "If you thought the Hoverbro 2016, 2015, 2014, 2013, 2012, 2011, 2010, and 1997 models were cool, just you wait and see what's new for 2017! Now, every purchase ships with a subscription of Hover and Vape Monthly and every Tony Hawk game ever made – including mobile! And best of all, each board is made in China, giving jobs to the millions of kids that can't find work at Nike.",
	rating: "10/10"
};
var product3 = {
	name: "Frickit Spinner 7000",
	price: "$1",
	img: "img/fidget_spinner.jpg",
	description: "Sick and tired of your mom bursting into your room, taking your vape pens, Good Charlotte records, and Pamela Anderson calendars? Try blowing off some steam with the Frickit Spinner 7000! Easily collapsable into any anal cavity for quick cover, mom will never again take the joy out of middle aged unemployment. Limit 300 per customer.",
	rating: "10/10"
};
var product4 = {
	name: "Beezewax Mustache Cement",
	price: "$420",
	img: "img/beeswax.jpg",
	description: "Do you have a mustache? COOL! Are you tired of the wind blowing out those perfect curls you spent hours twisting? Try Beezewax Mustache Cement. With a hold so strong, we guarantee you won't be able to smile. Made from space-grade wax and epoxy, your stache will never look so. damn. good.",
	rating: ""
};
var product5 = {
	name: "Entourage: All 8 seasons",
	price: "$24.99",
	img: "img/entourage.jpg",
	description: "Includes motion picture",
	rating: "10/10"
};
var product6 = {
	name: "Prius Calendar",
	price: "$FREE",
	img: "img/prius_calendar.jpg",
	description: "Do you like days and months? How about getting 60 miles to a gallon? Then you must need the new for 2017 Prius Calendar.",
	rating: "10/10"
};
var product7 = {
	name: "Shape-ups",
	price: "Starting at $799",
	img: "img/shapeup_shoes.jpg",
	description: "",
	rating: "10/10"
};
var product8 = {
	name: "Extra Large Sleeveless Tee's",
	price: "4 for $2",
	img: "img/sleeveless_shirt.jpg",
	description: "We've done the dirty work for you and pre-worn them so they fit extra loose.",
	rating: ""
};
var product9 = {
	name: "Truck Nuts",
	price: "Free with purchase of Prius Calendar",
	img: "img/truck_nuts.jpg",
	description: "Show the world just what type of person you are with a nice flesh colored pair of Truck Nuts. While supplies last.",
	rating: "10/10"
};

broProductArray.push(product1);
broProductArray.push(product2);
broProductArray.push(product3);
broProductArray.push(product4);
broProductArray.push(product5);
broProductArray.push(product6);
broProductArray.push(product7);
broProductArray.push(product8);
broProductArray.push(product9);

var broProductContainer = document.getElementById("broproduct-container");

// David wrote this function to print products to page. 
function printBroProductArrayToDom(array) {
 	for ( var i = 0; i < array.length; i++ ) {
 		var currentBroProduct = array[i];
 		var broDomString = johnsBuildDomStringFunction(currentBroProduct);
 	broProductContainer.innerHTML += broDomString;
}
}

function johnsBuildDomStringFunction(currentBroProduct) {
  var johnsDomString = "";
 		johnsDomString += '<section class="product">';
 		johnsDomString += 	'<div class="productimage">';
 		johnsDomString += 		'<img src="' + currentBroProduct.img + '">';
 		johnsDomString += 	'</div>';
 		johnsDomString += 	'<div class="productname">';
 		johnsDomString += 		'<h2>' + currentBroProduct.name + '</h2>';
 		johnsDomString +=		'</div>';
 		johnsDomString += 	'<div class="productdescription">'
 		johnsDomString += 		'<p>' + currentBroProduct.description + '</p>';
 		johnsDomString +=			'<h5>' + currentBroProduct.price + '</h5>';
 		johnsDomString += 	'</div>';
 		johnsDomString +=		'</section>';
 		return johnsDomString;
}

printBroProductArrayToDom(broProductArray);
