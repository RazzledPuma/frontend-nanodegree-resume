var bio = {
	"name" : "Rory Wade-Easley",
	"role" : "Senior User Experience Producer",
	"welcomeMessage" : "Welcome to my resume.",
	"contacts" : {
		"mobile" : "425.205.3773",
		"email" : "razzledpuma@gmail.com",
		"github" : "RazzledPuma",
		"location" : "Woodinville, WA"
	},
	"skills" : ["Project Management", "Production Planning", "Budgeting", "Analysis"],
	"bioPic" : "images/fry.jpg"
}

var education = {
	"schools": [
	{
		"name" : "Weber State University",
		"city" : "Ogden, UT",
		"degree" : "BS",
		"major" : ["Organizational Psychology", "Japanese Language"]
	},
	{
		"name" : "Stanford University",
		"city" : "Stanford, CA",
		"degree" : "Masters",
		"major" : ["Organizational Learning"]
	}
	]
	,
	"onlineCourses": [
	{
		"title" : "Front-End Web Developer Nanodegree",
		"school" : "Udacity",
		"dates" : "2015-2016",
		"url" : "udacity.com"
	},
	{
		"title" : "User-centered Design",
		"school" : "Georgia Tech",
		"dates" : "2012-2013",
		"url" : "georgiatech.edu"
	}

	]
};

var work = {
	"jobs": [
	{
		"employer" : "ATT",
		"title" : "Senior User Experience Producer",
		"location" : "Bothell, WA",
		"dates" : "2012 - present",
		"description" : "This is a great job."
	},
	{
		"employer" : "ATI",
		"title" : "Production Manager",
		"location" : "Bothell, WA",
		"dates" : "2009 - 2012",
		"description" : "This was also a great job."
	}
]
};

var projects = {
	"webSites": [
	{
		"title" : "TCS Expeditions website",
		"dates" : "March 2012",
		"description" : "Really cool website.",
		"images" : ["images/TCS01.jpg", "images/TCS02.jpg"]
	},

	{
		"title" : "ATI website",
		"dates" : "April 2011",
		"description" : "Really, really cool website.",
		"images" : ["images/ATI01.jpg", "images/ATI02.jpg"]
	}
]
};

var formattedName = HTMLheaderName.replace ("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace ("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);$("#skills").append(formattedSkill); 
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);$("#skills").append(formattedSkill); 
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);$("#skills").append(formattedSkill); 
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);$("#skills").append(formattedSkill); 
}

function displayWork(){
	for (job in work.jobs) {
		//create new div for work experience
		$("#workExperience").append(HTMLworkStart);
		//assign variables from employment objects
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		//concatonate employer and title
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		//append variable strings to end of helper.js entries
		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedDate);	
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);
	}
}
displayWork();
