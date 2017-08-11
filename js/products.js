
let productArray = [];

let product1 = {
	name: "Vapeinator Vape Pen",
	price: "$1000",
	img:
	description: "Need to write something down? We've got you covered, but first, take a puff off the Vapeinator 1500! Comes preloaded with Broberry Pie flavor.",
	rating: "10/10"
};
let product2 = {
	name: "Hoverbro 2017",
	price: "$47,000",
	img:,
	description: "If you thought the Hoverbro 2016, 2015, 2014, 2013, 2012, 2011, 2010, and 1997 models were cool, just you wait and see what's new for 2017! Now, every purchase ships with a subscription of Hover and Vape Monthly and every Tony Hawk game ever made – including mobile! And best of all, each board is made in China, giving jobs to the millions of kids that can't find work at Nike.",
	rating: "10/10"
};
let product3 = {
	name: "Frickit Spinner 7000",
	price: "$1",
	img:,
	description: "Sick and tired of your mom bursting into your room, taking your vape pens, Good Charlotte records, and Pamela Anderson calendars? Try blowing off some steam with the Frickit Spinner 7000! Easily collapsable into any anal cavity for quick cover, mom will never again take the joy out of middle aged unemployment. Limit 300 per customer.",
	rating: "10/10"
};
let product4 = {
	name: "Beezewax Mustache Cement",
	price: "$420",
	img:,
	description: "Do you have a mustache? COOL! Are you tired of the wind blowing out those perfect curls you spent hours twisting? Try Beezewax Mustache Cement. With a hold so strong, we guarantee you won't be able to smile. Made from space-grade wax and epoxy, your stache will never look so. damn. good.",
	rating:
};
let product5 = {
	name: "Entourage: All 8 seasons",
	price: "$24.99",
	img:,
	description: "Includes motion picture",
	rating: "10/10"
};
let product6 = {
	name: "Prius Calendar",
	price: "$FREE",
	img:,
	description: "Do you like days and months? How about getting 60 miles to a gallon? Then you must need the new for 2017 Prius Calendar.",
	rating: "10/10"
};
let product7 = {
	name: "Shape-ups",
	price: "Starting at $799",
	img:,
	description:,
	rating: "10/10"
};
let product8 = {
	name: "Extra Large Sleeveless Tee's",
	price: "4 for $2",
	img:,
	description: "We've done the dirty work for you and pre-worn them so they fit extra loose.",
	rating:
};
let product9 = {
	name: "Truck Nuts",
	price: "Free with purchase of Prius Calendar",
	img:,
	description: "Show the world just what type of person you are with a nice flesh colored pair of Truck Nuts. While supplies last.",
	rating: "10/10"
};



// David wrote this function to print products to page. 
// John, please replace "johnsDomStringFunction" with whatever your function name is for the dom string.
function printBroProductArrayToDom(broProductArray) {
	for ( var i = 0; i < broProductArray.length; i++ ) {
	var currentBroProduct = broProductArray[i];
	var broProductDomString = johnsDomStringFunction(currentBroProduct);
	johnsDomStringFunction.innerHTML += broProductDomString;
	}
}