let testimonyArray = [];

let testimony1 = {
	author: "Angelina Brolie",
	product: "Shape-ups", 
	testimony: "&quot;Shape-up shoes are so ugly they are cute. Get fit without stepping foot in a gym.  They really have toned my butt and legs just like they claim, all while reducing cellulite. Don't wait for a clinical trial because there is no plan for one.  I just had to try them and I fell in love with walking all over again.  They have turned walking into a carnival ride!&quot;",
	rating: "10/10"
};
let testimony2 = {
	author: "Broney Hawk",
	product: "Hoverbro", 
	testimony: "&quot;So.... Four wheels suck.  I learned how bad four wheels were once I tried the Hoverbro!!  Why are you still reading this?  Go buy one!  Go!&quot;",
	rating: "12/10"
};
let testimony3 = {
	author: "Fidel Castbro",
	product: "Vapeinator Vape Pen",
	testimony: "&quot;Hola Broney.  Mi Vapeinator Vape Pen es muy magnificio!  Me gusta mi pluma mucho mas que mis puros cubanos.  Mi criado prefiere la suave niebla sobre mi nocivo humo de tabaco.&quot;",
	rating: "9.5/10"
};
let testimony4 = {
	author: "Nabroleon Bronaparte",
	product: "Truck Nuts",
	testimony: "&quot;You have all heard the term, &quot;Nabrolean Syndrome&quot;, right?  Well, I am a little man...like a very little man.  I purchased one of these in every possible color.  They have several uses both at home and away, muhahahaha!  I even hung a set from my horse.  Why you say.  Because I can.  I am Nabrolean!&quot;",
	rating: "A BIG 10/10"
};

console.log(testimonyArray)

testimonyArray.push(testimony1);
testimonyArray.push(testimony2);
testimonyArray.push(testimony3);
testimonyArray.push(testimony4);


let testimonyContainer = document.getElementById("testimonyContainer");

function buildTestimonyPage(testimony) {
	let testimonyCard = "";
	testimonyCard +=  '<section class="testimony">';
  	testimonyCard +=      '<div class="title">';
    testimonyCard +=         '<h2>' + testimony.author + '</h2>';
  	testimonyCard +=      '</div>';
  	testimonyCard +=        '<div class="description">';
  	testimonyCard +=          '<p>' + testimony.testimony + '</p>';
  	testimonyCard +=          '<h6>' + testimony.rating + '</h6>';
  	testimonyCard +=      '</div>';
  	testimonyCard +=      '</section>';

  	return testimonyCard;
};

function printTestimonyArrayToDom(testimonyArray){
  for (var i = 0; i < testimonyArray.length; i++) {
  	// debugger;
	  let currentTestimony = testimonyArray[i];
	  let testimonyDomString = buildTestimonyPage(currentTestimony);

	  testimonyContainer.innerHTML += testimonyDomString;

  };
};

printTestimonyArrayToDom(testimonyArray);


