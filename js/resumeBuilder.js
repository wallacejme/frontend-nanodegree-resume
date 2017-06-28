var bio = {
  "name" : "Fulano Silva",
  "role" : "Desenvolvedor",
  "contacts" : {
    "mobile" : "+55 (DD) XXXXX-YYYY",
    "email" : "fulano@email.com",
    "twitter" : "@fulanos",
    "location" : "Brasil"
  },
  "picURL" : "images/fry.jpg",
  "welcomeMsg" : "Mensagem de Boas-Vindas",
  "skills" : ["Java", "Android", "HTML & CSS", "JS"]
}

var education = {
  "schools" : [
    {
      "name" : "Escola 01",
      "degree" : "Ens. Fundamental",
      "duration" : "2004-2007",
      "location" : "Brasil"
    },
    {
      "name" : "Escola 02",
      "degree" : "Ens. Médio",
      "duration" : "2008-2010",
      "location" : "Brasil"
    },
    {
      "name" : "Universidade X",
      "degree" : "Bacharelado",
      "duration" : "2011-2017",
      "location" : "Brasil"
    }
  ],
  "onlineCourses" : [
    {
      "title" : "Learn HTML &amp; CSS: Part 1",
      "school" : "Codecademy",
      "date" : "Jun 2017",
      "url" : "https://www.codecademy.com/learn/learn-html-css"
    },
    {
      "title" : "Learn Responsive Design",
      "school" : "Codecademy",
      "date" : "Jun 2017",
      "url" : "https://www.codecademy.com/learn/learn-responsive-design"
    },
    {
      "title" : "Learn JavaScript",
      "school" : "Codecademy",
      "date" : "Jun 2017",
      "url" : "https://www.codecademy.com/learn/learn-javascript"
    },
    {
      "title" : "JavaScript Basics",
      "school" : "Udacity",
      "date" : "Jun 2017",
      "url" : "https://br.udacity.com/course/javascript-basics--ud804/"
    }
  ]
};

var work = {
  "jobs": [
    {
      "employer" : "Empresa X",
      "position" : "Analista de TI",
      "description" : "<< Descrição das funções executadas como Analista de TI na Empresa X. >>",
      "year" : "2014-2016",
      "location" : "Brasil"
    },
    {
      "employer" : "Empresa Y",
      "position" : "Estagiário",
      "description" : "<< Descrição das funções exercidas como estagiário na Empresa Y. >>",
      "year" : "2012-2014",
      "location" : "Brasil"
    }
  ]
}

var projects = {
  "list" : [
    {
      "title" : "Nome do Projeto 01",
      "dates" : "2013-2014",
      "description" : "Descrição do projeto 01",
      "imgs" : [
        "images/197x148.gif",
        "images/197x148.gif",
        "images/197x148.gif"
      ]
    },
    {
      "title" : "Nome do Projeto 02",
      "dates" : "2015-2016",
      "description" : "Descrição do projeto 02",
      "imgs" : [
        "images/197x148.gif",
        "images/197x148.gif",
        "images/197x148.gif"
      ]
    }
  ]
};

bio.display = function() {
  $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
  $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

  ["#topContacts", "#footerContacts"].forEach(function(id){
    $(id).append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $(id).append(HTMLemail.replace("%data%", bio.contacts.email));
    $(id).append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    $(id).append(HTMLlocation.replace("%data%", bio.contacts.location));

  });

  $("#header").append(HTMLbioPic.replace("%data%", bio.picURL));
  $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg));

  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function (skill, i, array) {
      $("#skills").append(HTMLskills.replace("%data%", skill));
    });
  }
}

work.display = function(){
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);

    $(".work-entry:last").append(formattedEmployer + formattedTitle);
    $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].year));
    $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
    $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
  }
}

function inName(name){
  name = name.trim().split(" ");

  name[0] = name[0][0].toUpperCase() + name[0].slice(1).toLowerCase();
  name[1] = name[1].toUpperCase();

  return (name[0] + " " + name[1]);
}

projects.display = function () {
  var pList = projects.list;
  for(p in pList) {
    $("#projects").append(HTMLprojectStart);
    $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", pList[p].title));
    $(".project-entry:last").append(HTMLprojectDates.replace("%data%", pList[p].dates));
    $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", pList[p].description));
    for(img in pList[p].imgs) {
      $(".project-entry:last").append(HTMLprojectImage.replace("%data%", pList[p].imgs[img]));
    }
  }
}

education.displaySchools = function () {
  var schools = education.schools;
  for(s in schools) {
    $("#education").append(HTMLschoolStart);
    $(".education-entry:last").append(HTMLschoolName.replace("%data%", schools[s].name));
    $(".education-entry:last").append(HTMLschoolDegree.replace("%data%", schools[s].degree));
    $(".education-entry:last").append(HTMLschoolDates.replace("%data%", schools[s].duration));
    $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", schools[s].location));
  }
}

education.displayOnlineCourses = function () {
  $("#education").append(HTMLonlineClasses);

  var oclasses = education.onlineCourses;
  for(oc in oclasses) {
    $("#education").append(HTMLschoolStart);
    $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", oclasses[oc].title));
    $(".education-entry:last").append(HTMLonlineSchool.replace("%data%", oclasses[oc].school));
    $(".education-entry:last").append(HTMLonlineDates.replace("%data%", oclasses[oc].date));
    $(".education-entry:last").append(HTMLonlineURL.replace("%data%", oclasses[oc].url));
  }
}

$("#main").append(internationalizeButton);

bio.display();
work.display();
projects.display();
education.displaySchools();
education.displayOnlineCourses();

$("#mapDiv").append(googleMap);


/* Navegação */
var bussola = {
  "bioNav": "bioAnchor",
  "workNav": "workExperienceAnchor",
  "projectsNav": "projectsAnchor",
  "educationNav": "educationAnchor"
};

function jumpToElement(id) {
  $('html, body').animate({
    scrollTop: $("#"+id).offset().top}
  );
}

$(".nav > li").click(function(e){
  e.preventDefault();
  $(this).toggleClass("active");
  $(this).siblings().removeClass("active");

  var idNav = $(this).attr("id");
  console.log("idNav: " + idNav + ", anchorRef: " + bussola[idNav]);
  jumpToElement(bussola[idNav]);
});