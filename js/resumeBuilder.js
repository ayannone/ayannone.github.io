// *******************************************
// ***********   Biography Data    ***********
// *******************************************

var bio = {
  "name" : "Andrea Yannone",
  "role" : "Full Stack Web Developer",
  "contacts" : {
    "mobile" : "(845) 541-3090",
    "email" : "andrea.yannone1@gmail.com",
    "github" : "ayannone",
    "twitter" : "@delia421",
    "location" : "New York, USA"
  },
  "welcomeMsg" : "Hi, I am Andrea. <br> A \"Hamburger Deern\" from Germany, now residing in New York. " +
                 "Full Stack Web Developer with specialist focus on Ruby on Rails and Front-end technologies, " +
                 "experienced IT Professional with Lotus Notes/Domino and Microsoft SharePoint, Social " +
                 "Entrepreneur, Fair Trader and Innovator.",
  "skills" : ["HTML5","CSS3","JavaScript","jQuery","Ajax","Ruby","Ruby on Rails","Backbone.js","D3.js","SQL","MySQL","PostgreSQL","Bootstrap","Git","GitHub","Heroku","Amazon S3","RSpec","Wordpress","Drupal","Lotus Notes/Domino","Microsoft SharePoint", ".NET/C#"],
  "bioPic" : "images/portrait.jpg",
  display : function() {
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    $("#top-bar").prepend(formattedRole);
    $("#top-bar").prepend(formattedName);

    bio.displayContact("#top-contacts");

    var formattedBioPic = HTMLbioPic.replace("%data%",bio.bioPic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMsg);
    $("#top-content").append(formattedBioPic);
    $("#top-content").append(formattedWelcomeMsg);

    if (bio.skills.length > 0) {
      $("#top-content").append(HTMLskillsHeader);
      $("#top-content").append(HTMLskillsStart);
      bio.displaySkills("#skills");
    };
  },
  displayContact : function(htmlElement) {
    for (contact in bio.contacts) {
      var formattedContactGeneric = HTMLcontactGeneric.replace("%contact%",contact).replace("%data%",bio.contacts[contact]);
      $(htmlElement).append(formattedContactGeneric);
    };
  },
  displaySkills : function(htmlElement) {
    for (skill in bio.skills) {
      var formattedHTMLSkill = HTMLskills.replace("%data%",bio.skills[skill]);
      $(htmlElement).append(formattedHTMLSkill);
    };
  }
};

bio.display();

//************************************************************************
// ***********   Education Data (Schools and Online Courses)   ***********
//************************************************************************

var education = {
  "schools" : [
    {
      "name" : "FH  Wedel - University of Applied Sciences",
      "location" : "Wedel, Germany",
      "degree" : "Bachelor plus",
      "dates" : "1998",
      "majors" : ["CS","Business Administration"],
      "url" : "http://www.fh-wedel.de"
    },
    {
      "name" : "General Assembly",
      "location" : "New York City",
      "degree" : "Full Stack Web Developer",
      "dates" : "2014",
      "majors" : ["Web Development Immersive"],
      "url" : "http://www.generalassemb.ly"
    }
  ],
  "onlineCourses" : [
    {
      "title" : "Front End Web Development",
      "school" : "Udacity",
      "dates" : "2015",
      "url" : "http://www.udacity.com"
    }
  ],
  display : function() {
    $("#education").append(HTMLeducationHeader);
    for (school in education.schools) {
      $("#education").append(HTMLschoolStart);
      var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
      var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
      var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
      $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
      $(".education-entry:last").append(formattedSchoolDates);
      $(".education-entry:last").append(formattedSchoolLocation);
      for (major in education.schools[school].majors) {
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors[major]);
        $(".education-entry:last").append(formattedSchoolMajor);
      };
    };
    $("#education").append(HTMLonlineClasses);
    for (onlineCourse in education.onlineCourses) {
      $("#education").append(HTMLonlineCourseStart);
      var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[onlineCourse].title);
      var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[onlineCourse].school);
      var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[onlineCourse].dates);
      var formattedOnlineURL = HTMLonlineURL.replace("%url%",education.onlineCourses[onlineCourse].url).replace("%data%",education.onlineCourses[onlineCourse].url);
      $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
      $(".education-entry:last").append(formattedOnlineDates);
      $(".education-entry:last").append(formattedOnlineURL);
    };
  }
};

education.display();

// **************************************
// ***********   Work Data    ***********
// **************************************

var work = {
  "jobs" : [
    {
      "employer" : "Best Class, Inc",
      "title" : "Lead Web Developer",
      "location" : "New York City",
      "dates" : "since 09/2014",
      "description" : "In my position as the lead web developer I am responsible for the technical " +
                      "implementation of bestclass.nyc, an online aggregator for children’s after-school " +
                      "activities such as art, music, sports, language, tutoring and religious classes. " +
                      "Best Class provides a search engine for locating high quality classes in the neighborhood, " +
                      "offering an easy route, navigable by older children as well as parents. It delivers " +
                      "all the necessary information, eliminating the need for lengthy internet searches."
    },
    {
      "employer" : "Self-employed",
      "title" : "IT-Freelancer",
      "location" : "Norderstedt, Germany",
      "dates" : "07/2010 - 12/2013",
      "description" : "My freelance work for Lufthansa Systems AS GmbH included maintenance of their " +
                      "corporate HR database (Lotus Notes/Domino), implementing functionality with " +
                      "Microsoft SharePoint to provide collaboration within and amongst departments, " +
                      "extending the software and hardware ordering systems features as well as hardware " +
                      "and software installations for various other clients and computer training for " +
                      "seniors. Specialist focus on Microsoft SharePoint, Lotus Notes/Domino."
    },
    {
      "employer" : "w3mobil Lernprojekte",
      "title" : "Co-founder",
      "location" : "Hamburg, Germany",
      "dates" : "09/2009 - 12/2013",
      "description" : "With my business partner I founded this company to help share computer knowledge " +
                      "and make technology accessible to others (especially older and disabled persons). " +
                      "I set up a partner-network of social institutions, nursing homes and public schools " +
                      "and developed, organized and implemented over 60 computer literacy training projects " +
                      "for children, teenager and seniors throughout Hamburg with more than 2000 students " +
                      "enrolled."
    },
    {
      "employer" : "Lufthansa Systems AS GmbH",
      "title" : "Technical Administration and SharePoint Developer",
      "location" : "Norderstedt, Germany",
      "dates" : "04/2007 - 06/2010",
      "description" : "For the Technical Administration Department I established a Microsoft SharePoint " +
                      "infrastructure to improve collaboration and sharing of information, I developed a " +
                      "hardware and software ordering system and provided technical in-house user support. " +
                      "I also was solely responsible for the redesign and refactoring of Lufthansa Systems' " +
                      "HR database (Lotus Notes/Domino) and augmented data flow that effectively reduced the " +
                      "time spent inputting data relating to the company's job applicants by 50%."
    },
    {
      "employer" : "Condor Lebensversicherungs-Aktiengesellschaft",
      "title" : "Application Administrator",
      "location" : "Hamburg, Germany",
      "dates" : "08/2002 - 03/2007",
      "description" : "As an application administrator my tasks included application development and " +
                      "system administration with Lotus Notes/Domino as well as in-house user support " +
                      "and first technical contact for the Customer Service department and sales staff. " +
                      "As a project manager I was responsible for implementing an electronic resubmission " +
                      "system connected with the digital File Archive as well as launching a Blackberry " +
                      "infrastructure for the sales department."
    },
    {
      "employer" : "Nikotel Deutschland AG",
      "title" : "System Integration Administrator",
      "location" : "Hamburg, Germany",
      "dates" : "01/2001 - 11/2001",
      "description" : "My responsibilites included design, installation and maintainance of the whole " +
                      "company's Lotus Notes/Domino infrastructure as well as the Windows 2000 domain " +
                      "network with all services (Domain controllers, Mail servers and Windows Clients). " +
                      "Migration of the corporate mail system from Lotus Notes/Domino to Outlook/Exchange 2000."
    },
    {
      "employer" : "PPP Internetdienstleistungen GmbH",
      "title" : "Development and Support Engineer",
      "location" : "Hamburg, Germany",
      "dates" : "04/1998 - 12/2002",
      "description" : "I developed, implemented and maintained an in-house information system with " +
                      "Lotus Notes/Domino based on my workflow research that helped improve the processing " +
                      "of all customer services, e.g. help requests, orders, installation procedures. Later " +
                      "I joined the user support team to help customers with technical inquiries as well as " +
                      "with installations and configuration of internet services"
    }
  ],
  display : function() {
    $("#work-experience").append(HTMLworkHeader);
    for (job in work.jobs) {
      $("#work-experience").append(HTMLworkStart);
      var formattedWorkEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
      var formattedWorkTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
      var formattedWorkDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
      var formattedWorkLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
      var formattedWorkDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
      $(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle);
      $(".work-entry:last").append(formattedWorkDates);
      $(".work-entry:last").append(formattedWorkLocation);
      $(".work-entry:last").append(formattedWorkDescription);
    };
  }
};

work.display();

// ******************************************
// ***********   Projects Data    ***********
// ******************************************

var projects = {
  "projects" : [
    {
     "title" : "bestclass.nyc",
     "dates" : "2015",
     "description" : "Online aggregator for children's after school activities, that provides a search engine for locating high quality classes in your neighborhood.",
     "images" : [""]
    },
    {
     "title" : "Sublime Packages Evaluator",
     "dates" : "2014",
     "description" : "Review and rate packages for the Sublime Text Editor. Share your experience with other users. Display packages by popularity using data visualization.",
     "images" : [""]
    },
    {
     "title" : "Business Card Organizer",
     "dates" : "2014",
     "description" : "Take a picture of a business card and email it to the app to keep track of your networking contacts (collaborative project).",
     "images" : [""]
    },
    {
     "title" : "Helpr",
     "dates" : "2014",
     "description" : "Finding, requesting and offering help in different locations and categories and meet people in the real world.",
     "images" : [""]
    }
  ],
  display : function() {
    $("#projects").append(HTMLprojectHeader);
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
  }
};

projects.display();

// **********************************************
// ***********   Let's connect Data   ***********
// **********************************************

$("#lets-connect").append(HTMLletsConnectHeader);
$("#lets-connect").append(HTMLletsConnectFooterContactsList);
bio.displayContact("#footer-contacts");

// ***************************************
// ***********   Google Map    ***********
// ***************************************

$('#map-div').append(HTMLgoogleMapHeader);
$('#map-div').append(googleMap);

// **********************************************************
// ***********   D3 Visualization of Skill level  ***********
// **********************************************************

$("#d3-container").prepend("<p>(0:beginner - 10:expert level)</p>").prepend("<h2>Skill level visualized</h2>");

buildSvgBubbleChart();
drawBubbleChart(skillLevel);

buildSvgPieChart();
drawPieChart(skillLevel);

buildSvgBarChart();
drawBarChart(skillLevel);
