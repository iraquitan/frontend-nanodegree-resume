/*
This is empty on purpose! Your code to build the resume will go here.
 */
var name = "Iraquitan Cordeiro Filho";
var role = "Full Stack Web Developer";
var picture = "https://avatars1.githubusercontent.com/u/3467229?v=3&s=460";
var welcomeMessage = "Hi, I'm a Full Stack Web Developer";
var skills = ["Python", "Web development", "Javascript"];
var bio = {
    name: name,
    role: role,
    contacts: {
        mobile: "+55 91 98289-4092",
        email: "iraquitanfilho@gmail.com",
        github: "iraquitan",
        twitter: "@iraquitan_filho",
        location: "Belém"
    },
    biopic: picture,
    welcomeMessage: welcomeMessage,
    skills: skills
};

var work = {
    jobs: [
        {
            title: "Research Grantee",
            employer: "Vale Institute of Technology",
            dates: 3,
            location: "Belém",
            description: ""
        }
    ]
};

var projects = {
    projects: [
        {
            title: "Javascript Portfolio Site",
            dates: 2016,
            description: "",
            images: []
        }
    ]
};


var education = {
    "schools": [
        {
            "name": "Federal University of Pará",
            "dates": "2008-2014",
            "location": "Belém",
            "degree": "BS",
            "majors": ["CS"],
            "url": "https://www.portal.ufpa.br/"
        }
    ],
    "onlineCourses": [
        {
            "title": "Javascript Syntax",
            "school": "Udacity",
            "dates": 2016,
            "url": "https://classroom.udacity.com/courses/ud804/"
        }
    ]
};


var formattedName = document.createElement('h1');
formattedName.innerHTML = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = document.createElement('span');
formattedRole.innerHTML = HTMLheaderRole.replace("%data%", bio.role);

var myMain = document.getElementById('main');
myMain.insertBefore(formattedRole, myMain.firstChild);
myMain.insertBefore(formattedName, myMain.firstChild);