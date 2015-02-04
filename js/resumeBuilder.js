// $("#main").append("Andrea Yannone");

// var awesomeThoughts = "I am Andrea and I am awesome.";
// console.log(awesomeThoughts);

// var funThoughts = awesomeThoughts.replace("awesome","fun");
// $("#main").append(funThoughts);


////////////   Biography Data   //////////////

var skills = ["HTML5","CSS3","JavaScript","jQuery","Ruby on Rails","Backbone.js","SQL"];
var bio = {
  "name" : "Andrea Yannone",
  "role" : "Full Stack Web Developer",
  "contacts" : {
    "mobile" : "(845) 541-3090",
    "email" : "andrea.yannone1@gmail.com",
    "twitter" : "@delia421",
    "github" : "https://github.com/ayannone",
    "blog" : "",
    "location" : "New York"
  },
  "welcomeMsg" : "Happy Everything!",
  "skills" : skills
};

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);

// var formattedContactGeneric = HTMLcontactGeneric.replace("%data%","");
var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
var formattedGitHub = HTMLgithub.replace("%data%",bio.contacts.github);
var formattedBlog = HTMLblog.replace("%data%",bio.contacts.blog);
var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
// var formattedBioPic = HTMLbioPic.replace();
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%",bio.welcomeMsg);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#header").append(formattedMobile);
$("#header").append(formattedEmail);
$("#header").append(formattedTwitter);
$("#header").append(formattedGitHub);
$("#header").append(formattedBlog);
$("#header").append(formattedLocation);
$("#header").append(formattedWelcomeMsg);

if (bio.skills.length > 0) {
  $('#header').append(HTMLskillsStart);
  // for (i = 0; i < bio.skills.length; i++) {
  //   $("#skills").append(HTMLskills.replace("%data%",bio.skills[i]));
  // }
  for (skill in bio.skills) {
    $("#skills").append(HTMLskills.replace("%data%",bio.skills[skill]));
  }
};


////////////   Education Data (Schools and Online Courses)  //////////////

var education = {
  "schools" : [
    {
      "name" : "FH  Wedel - University of Applied Sciences",
      "location" : "Wedel, Germany",
      "degree" : "Bachelor plus",
      "dates" : "1992-1998",
      "major" : ["CS"],
      "url" : "http://www.fh-wedel.de"
    },
    {
      "name" : "General Assembly",
      "location" : "New York",
      "degree" : "Full Stack Web Developer",
      "dates" : "2014",
      "major" : ["Full Stack Web Development"],
      "url" : "http://www.generalassemb.ly"
    }
  ],
  "onlineCourses" : [
    {
      "title" : "Front End Web Development",
      "school" : "Udacity",
      "dates" : "2015",
      "url" : ""
    },
    {
      "title" : "Full Stack Web Development",
      "school" : "Udacity",
      "dates" : "2015",
      "url" : ""
    }
  ]
};


// var formattedSchoolStart = HTMLschoolStart.replace("%data%","");
var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[0].name);
var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[0].degree);
var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[0].dates);
var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[0].location);
var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[0].major);

// var formattedOnlineClasses = HTMLonlineClasses.replace("%data%","");
var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[0].title);
var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[0].school);
var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[0].dates);
var formattedOnlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[0].url);

// $("#education").append(formattedSchoolStart);
$("#education").append(formattedSchoolName);
$("#education").append(formattedSchoolDegree);
$("#education").append(formattedSchoolDates);
$("#education").append(formattedSchoolLocation);
$("#education").append(formattedSchoolMajor);

// $("#education").append(formattedOnlineClasses);
$("#education").append(formattedOnlineTitle);
$("#education").append(formattedOnlineSchool);
$("#education").append(formattedOnlineDates);
$("#education").append(formattedOnlineURL);


////////////   Work Data   //////////////

var work = {
  "jobs" : [
    {
      "employer" : "Best Class, Inc",
      "title" : "Lead Web Developer (Full Stack)",
      "location" : "New York City, USA",
      "dates" : "since 09/2014",
      "description" : "Developing an online aggregator for children's after school classes."
    },
    {
      "employer" : "Self-employed",
      "title" : "IT-Freelancer",
      "location" : "Norderstedt, Germany",
      "dates" : "07/2010-12/2013",
      "description" : "SharePoint Developer, Lotus Notes Specialist, Consultant"
    },
    {
      "employer" : "w3mobil Lernprojekte",
      "title" : "Co-founder",
      "location" : "Hamburg, Germany",
      "dates" : "09/2009 - 12/2013",
      "description" : "Developed, organized and implemented computer literacy projects for children, teenager and senior citizen. Established and managed a partner-network of social institutions, nursing homes and public schools."
    },
    {
      "employer" : "Lufthansa Systems AS GmbH",
      "title" : "Technical Administration and SharePoint Developer",
      "location" : "Norderstedt, Germany",
      "dates" : "04/2007-06/2010",
      "description" : "Established a SharePoint infrastructure, developed a hardware and software ordering system (InfoPath, .NET/C#), re-designed and refactored the HR database (Lotus Notes / Domino)."
    },
    {
      "employer" : "Condor Lebensversicherungs-Aktiengesellschaft",
      "title" : "Application Administrator",
      "location" : "Hamburg, Germany",
      "dates" : "08/2002-03/2007",
      "description" : "Responsible for application development and system administration with Lotus Notes/Domino as well as in-house user support."
    },
    {
      "employer" : "Nikotel Deutschland AG",
      "title" : "System Integration Administrator",
      "location" : "Hamburg, Germany",
      "dates" : "01/2001-11/2001",
      "description" : "Responsibilities included the implementation of the company's Lotus Notes/Domino infrastructure, installation and administration of the Windows 2000 domain network and the migration of the corporate mail system from Lotus Notes/Domino to Outlook/Exchange 2000."
    },
    {
      "employer" : "PPP Internetdienstleistungen GmbH",
      "title" : "Development and Support Engineer",
      "location" : "Hamburg, Germany",
      "dates" : "04/1998-12/2002",
      "description" : "I developed, implemented and maintained an in-house information system based on my workflow research that helped improve the processing of all customer services."
    }
  ]
};

// var workFunc = function () {
//   ...
// }

function displayWork() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedWorkEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
    var formattedWorkTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
    var formattedWorkDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
    var formattedWorkLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
    var formattedWorkDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
    $(".work-entry:last").append(formattedWorkEmployer);
    $(".work-entry:last").append(formattedWorkTitle);
    $(".work-entry:last").append(formattedWorkDates);
    $(".work-entry:last").append(formattedWorkLocation);
    $(".work-entry:last").append(formattedWorkDescription);
  };
};

displayWork();

////////////   Projects Data   //////////////

var projects = {
  "projects" : [
    {
     "title" : "Helpr",
     "dates" : "2014",
     "description" : "A platform to connect help",
     "images" :  ""
    },
    {
     "title" : "",
     "dates" : "",
     "description" : "",
     "images" :  ""
    },
    {
     "title" : "",
     "dates" : "",
     "description" : "",
     "images" :  ""
    },
    {
     "title" : "",
     "dates" : "",
     "description" : "",
     "images" :  ""
    }
  ]
};

projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
    var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
    var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
    var formattedProjectImage = HTMLprojectImage.replace("%data%",projects.projects[project].images);
    $(".project-entry:last").append(formattedProjectTitle);
    $(".project-entry:last").append(formattedProjectDates);
    $(".project-entry:last").append(formattedProjectDescription);
    $(".project-entry:last").append(formattedProjectImage);
  };
};

projects.display();


////////////   various functions  ////////////

// $(document).click(function(loc){
//   var x = loc.pageX;
//   var y = loc.pageY;
//   logClicks(x,y);
// });


// function locationizer(work_obj) {
//   var locations = [];
//   for (job in work.jobs) {
//     locations.push(work.jobs[job].location);
//   };
//   return locations; // array of locations
// };
// var locations = locationizer(work);


// function inName(name) {
//   var nameArray = name.trim().split(" ");
//   var firstName = nameArray[0].toLowerCase();
//   firstName = firstName[0].toUpperCase() + firstName.slice(1);
//   var lastName = nameArray[1].toUpperCase();
//   return firstName + " " + lastName;
// };
$("#main").append(internationalizeButton);


////////////   Google Map   //////////////

$('#mapDiv').append(googleMap);

