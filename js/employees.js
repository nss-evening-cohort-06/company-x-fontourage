
let employeeArray = [];

let employee1 = {
	name: "Dre",
	title: "Coffee Broaster",
	img: "https://technical.ly/baltimore/wp-content/uploads/sites/3/2013/11/EdgarAllanBro.jpg",
	bio: ""
};
let employee2 = {
	name: "David",
	title: "Broseidon",
	img:"https://pbs.twimg.com/profile_images/683645355/Broseidon_400x400.jpg",
	bio: ""
};
let employee3 = {
	name: "John",
	title: "Broforce One",
	img: "http://static5.businessinsider.com/image/4e7c9ce8ecad04c93f000037/the-itunes-terms-of-service-has-been-translated-into-bro-speak.jpg",
	bio: ""
};
let employee4 = {
	name: "Robbie",
	title: "Brotein Shake",
	img: "https://2static2.fjcdn.com/comments/Am+i+doing+this+right+_48691e58836149602066af4d322cf400.png",
	bio: ""
};
let employee5 = {
	name: "Brodo",
	title: "Squid",
	img: "https://68.media.tumblr.com/tumblr_m0m16f0rQU1qij2epo1_500.jpg",
	bio: "IDK, he was the first person to apply. Keeps talking about some ring, it's annoying af."
};

employeeArray.push(employee1);
employeeArray.push(employee2);
employeeArray.push(employee3);

var employeeContainer = document.getElementById("employee-container");

function printEmployeesToDom(array) {
 	for ( var i = 0; i < array.length; i++ ) {
 		var employee = array[i];
 		var employeeDomString = buildEmployeeDomString(employee);
 	employeeContainer.innerHTML += employeeDomString;
}
}

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
}

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



