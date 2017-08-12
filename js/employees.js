
let employeeArray = [];

let employee1 = {
	name: "Dre",
	title: "Coffee Broaster",
	img: "https://technical.ly/baltimore/wp-content/uploads/sites/3/2013/11/EdgarAllanBro.jpg",
	bio: "The man, the myth, the bro. From his early days of working at Starbucks, to his now full time job as CEO and founder of The Brocery Store, he's the one that started it all."
};
let employee2 = {
	name: "David",
	title: "Broseidon",
	img:"https://pbs.twimg.com/profile_images/683645355/Broseidon_400x400.jpg",
	bio: "When David isn't busy being King of The Seas, he's King of The Bros. Some speculate that at the end of his trident, it's not 3 spikes, but just a giant fidget spinner."
};
let employee3 = {
	name: "John",
	title: "Broforce One",
	img: "http://static5.businessinsider.com/image/4e7c9ce8ecad04c93f000037/the-itunes-terms-of-service-has-been-translated-into-bro-speak.jpg",
	bio: "John is an OG Bro. He was listening to Fred Durst before he got together with the rest of those guys and formed Limp Bizkit."
};

employeeArray.push(employee1);
employeeArray.push(employee2);
employeeArray.push(employee3);

var employeeContainer = document.getElementById("employee-container");

function addEmployee(name, title, img, bio) {
	let newEmployee = {};
	newEmployee.name = name; 
	newEmployee.title = title;  
	newEmployee.img = img;
	newEmployee.bio = bio; 
	employeeArray.push(newEmployee);
};

addEmployee("Robbie", "Brotein Shake", "https://2static2.fjcdn.com/comments/Am+i+doing+this+right+_48691e58836149602066af4d322cf400.png", "Brotein Shake will mix you up and drink you whole. Made in America.");
addEmployee("Brodo", "Ring Bearer and Bling Wearer", "https://68.media.tumblr.com/tumblr_m0m16f0rQU1qij2epo1_500.jpg", "IDK, he was the first person to apply. Keeps talking about some ring, it's annoying af.");

function printEmployeesToDom(array) {
 	for ( var i = 0; i < array.length; i++ ) {
 		var employee = array[i];
 		var employeeDomString = buildEmployeeDomString(employee);
 	employeeContainer.innerHTML += employeeDomString;
	};
};

function buildEmployeeDomString(employee) {
  var johnsDomString = "";
 		johnsDomString += '<section class="employee">';
 		johnsDomString += 	'<div class="employee-pic">';
 		johnsDomString += 		'<img src="' + employee.img + '">';
 		johnsDomString += 	'</div>';
 		johnsDomString += 	'<div class="employee-name">';
 		johnsDomString += 		'<h2>' + employee.name + '</h2>';
 		johnsDomString +=		'</div>';
 		johnsDomString += 	'<div class="employee-title">'
 		johnsDomString += 		'<h4>' + employee.title + '</h4>';
 		johnsDomString +=		'</div>';
 		johnsDomString += 	'<div class="employee-bio">'
 		johnsDomString +=			'<p>' + employee.bio + '</p>';
 		johnsDomString += 	'</div>';
 		johnsDomString +=		'</section>';
 		return johnsDomString;
};

printEmployeesToDom(employeeArray);

// - [ ] Create an array of 3 employees. Each employee should be an object. The object should have at least 4 key/value pairs: 
//     - Employee Name
//     - Employee Title
//     - Employee Image
//     - Employee Bio
// - [ ] Create a function to add a new employee. This function should accept 4 arguments: employee name, employee title, employee image and employee bio. This function should add the employee as an object to the employee array.
// - [ ] Call the createEmployee function twice, adding 2 more unique employees.
// - [ ] Loop through the array of employees and print them to the page. 
// - [ ] The layout of the employee page should be a grid of cards. 3-wide, 4-wide, 5-wide, the teams must decide how many cards are on each row.






