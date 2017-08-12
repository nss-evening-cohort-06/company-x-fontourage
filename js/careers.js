let careersArray = [];

let career1 = {
	title: "Brovernight Stocker",
	description: "Do you like hanging out with other awesomely strong dudes?  Do you like to lift heavy Brostuff?  Do you like to skim a little product off the top and hope we won't notice?  Why not get fat paid to do all of the above?  Apply today.  A perfect way to get your shape ups in the door.",
	salary: "6-8 vape juice vials per week.  Subject to flavor availability."
};
let career2 = {
	title: "Assets Brotection",
	description: "Looking for a way to become one with your inner bro?  Our Assets Brotection team members are trained in the Bro Kata, a finely honed martial art designed to keep the chill in and the drama out. It may or may not bear a striking resemblance to pro wrestling. We've installed ropes and ring posts on each side of the entrance instead of an inventory control system so you can give those lame ass thieves a proper People's Elbow.",
	salary:	"20 red solo cups, 10 ping pong balls, and a case of Natty Ice"
};
let career3 = {
	title: "Bromotions Coordinator",
	description: "We are looking for a few awesome bro's who think like a true bro.  This bro will create bropaganda and bromote awesomeness among the area bros and convince them to part with their green (either kind) for our awesome brostuff.  Hella hustle required.  Don't front in the interview if you don't have the backbrone.",
	salary: "Season tickets to every Monster Truck Rally"
};
let career4 = {
	title: "Brocurement Specialist",
	description: "This bro needs to be a brofessional.  He will brogotiate prices and manage price dispute brosolutions.  The ultimate responsibility for most brocurement specialists is to find quality goods or services at a price bro's are willing to fork over the skrilla for.",
	salary: "Lifetime subscription to Maxim"
};

careersArray.push(career1);
careersArray.push(career2);
careersArray.push(career3);
careersArray.push(career4);

let careerContainer = document.getElementById("openPositions");

function printCareersToDom(array) {
	for (var i = 0; i < array.length; i++) {
		var currentPosition = array[i];
		var positionDomString = johnsBuildDomStringFunction(currentPosition);
		careerContainer.innerHTML += positionDomString;
	}
};

function johnsBuildDomStringFunction(position) {
  var johnsDomString = "";
 		johnsDomString += '<section class="career">';
 		johnsDomString += 	'<div class="career-title">';
 		johnsDomString += 		'<h2>' + position.title + '</h2>';
 		johnsDomString +=		'</div>';
 		johnsDomString += 	'<div class="career-description">'
 		johnsDomString += 		'<p>' + position.description + '</p>';
 		johnsDomString += 	'</div>'
 		johnsDomString +=		'<div class="career-salary">'
 		johnsDomString +=			'<h3>Salary: ' + position.salary + '</h3>';
 		johnsDomString += 	'</div>';
 		johnsDomString +=		'</section>';
 		return johnsDomString;
};

printCareersToDom(careersArray);