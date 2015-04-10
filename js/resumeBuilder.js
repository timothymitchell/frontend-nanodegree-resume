// JSON Start

var bio = {
    "name": "Tim Mitchell",
    "role": "Front End Development",
    "contacts": {
        "mobile": "777-888-5555",
        "email": "tim.mitchell@outlook.com",
        "twitter": "@bennettig",
        "gitHub": "timmitchell",
        "blog": "brownheron.com",
        "location": "Atlanta, GA"
    },
    "pictureURL": "images/super_mario.jpg",
    "welcomeMessage": "Hello",
    "skills": [
        "Front End Web Development, Systems Administration"
    ]
};

var education = {
  "schools": [
    {
      "name": "Atlanta Technical College",
      "location": "Atlanta, GA",
      "degree": "Microsoft Certified Systems Engineer, Microsoft Certified Professional",
      "major": "Systems Administration ",
      "dates": "2000",
      "url": "http://www.atlantatech.edu"
    },
    {
      "name": "Forest High School",
      "location": "Ocala, FL",
      "degree": "Diploma",
      "major": "General Studies",
      "dates": "1996",
      "url": "http://www.foresthigh.org"
    }
  ],
  "onlineCourses": [
    {
      "title": "Front End Web Development",
      "school": "Udacity",
      "dates": "2015",
      "URL": "https://www.udacity.com"
    },
    {
      "title": "Introduction to AJAX Programming",
      "school": "Clayton State University",
      "dates": "2014",
      "URL": "https://clayton.edu"
    },
    {
      "title": "Creating Mobile Apps with jQuery Mobile",
      "school": "Clayton State University",
      "dates": "2013",
      "URL": "https://clayton.edu"
    },
    {
      "title": "Introduction to Java Programming",
      "school": "Clayton State University",
      "dates": "2013",
      "URL": "https://clayton.edu"
    }
  ]
};

var work = {
  "jobs": [
    {
      "employer": "Bennett International Group",
      "title": "Front End Developer",
      "location": "Atlanta, GA",
      "dates": "2010 - Current",
      "description": "Currently working with our Java team developing the front end of our Transportation Management software."
    },
    {
      "employer": "Henry County Board of Commissioners",
      "title": "Systems Administrator II",
      "location": "McDonough, Ga",
      "dates": "2001 - 2010",
      "description": "Managed the daily technical operations of the Upper Courts, Lower Courts and District Attorneys Office."
    }
  ]
};

var projects = {
  "projects": [
    {
      "title": "Employee Directory",
      "dates": "2015",
      "description": "Directory of current employees",
      "images": [ "images/contacts1.jpg", "images/contacts2.jpg" ]
    },
    {
      "title": "Mobile Directory",
      "dates": "2013",
      "description": "Mobile directory for field agents. Project was built using jQuery Mobile framework.",
      "images": [ "images/jqm1.jpg", "images/jqm2.jpg" ]
    }
  ]
};

// Bio Start

function displayBio() {

  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);

  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedName);

  bioDetails($("#topContacts"));

  var formattedPic = HTMLbioPic.replace("%data%", bio.pictureURL);
  $("#header").append(formattedPic);

  var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedWelcomeMsg);

  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart); 

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
  }

}

displayBio();

// Education Start

function displayEducation() {
  for (school in education.schools) {
    $("#education").append(HTMLschoolStart);

    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
    $(".education-entry:last").append(formattedSchoolName);

    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    $(".education-entry:last").append(formattedSchoolDates);

    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
    $(".education-entry:last").append(formattedSchoolMajor);

    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
      $(".education-entry:last").append(formattedSchoolDegree);

    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(formattedSchoolLocation);
  }

    $("#education").append(HTMLonlineClasses);

    for (course in education.onlineCourses) {

    $("#education").append(HTMLschoolStart);

    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);

    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
    $(".education-entry:last").append(formattedTitle + formattedSchool);

    var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
    $(".education-entry:last").append(formattedDates);

    var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].URL);
    $(".education-entry:last").append(formattedURL);
  }
}

displayEducation();

// Work Start

function displayWork() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
}

displayWork();

// Projects Start

projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if (projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
      $(".project-entry:last").append(formattedImage);
      }
    }
  }
}
projects.display();

//google map

$("#mapDiv").append(googleMap);

// Start Footer

function bioDetails(element) {

  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  element.append(formattedMobile);

  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  element.append(formattedEmail);

  var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.gitHub);
  element.append(formattedGitHub);

  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  element.append(formattedTwitter);

  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  element.append(formattedLocation);

}

bioDetails($("#footerContacts"));

