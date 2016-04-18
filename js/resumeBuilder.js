/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
/*
 var bio = {
 	"name" : "Rory Wade-Easley",
 	"role" : "Program Manager",
 	"contacts" : {
 		"mobile" : "425.205.3773",
 		"email" : "razzledpuma@gmail.com",
 		"github" : "RazzledPuma",
 		"twitter" : "@razzledpuma",
 		"location" : "Woodinville - Seattle"
 	},
 	"welcomeMessage" : "Welcome to my resume. Etc, etc, etc.",
 	"skills" : ["awesomeness", "delivering things", "problem solver"],
 	"bioPic" : "images/fry.jpg"
 };
*/

 var work = {
 	"currentPosition" : "Web Producer",
 	"currentEmployer" : "ATT"
 };

/*
work["currentYears"] = "3";
work["currentEmployCity"] = "Bothell";

*/
 var education = {
 	"college01Name" = "Weber State University",
 };

/* 
education.college01City = "Ogden";
education.college01State = "Utah";

 var formattedName = HTMLheaderName.replace("%data%", bio.name);
 var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);

*/  
  $("#main").append(work["currentPosition"]);
  $("#main").append(education.college01Name);
