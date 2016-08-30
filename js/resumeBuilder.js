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
            dates: "2014 - Present",
            location: "Belém",
            description: "I do research in the Brain Computer Interfaces (BCI) field."
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

// jQuery solution
// formattedName = HTMLheaderName.replace('%data%', bio.name);
// formattedRole = HTMLheaderRole.replace('%data%', bio.role);
// $('#main').prepend(formattedRole);
// $('#main').prepend(formattedName);

// Vanilla Js solution
var formattedName = htmlWrapper(HTMLheaderName.replace("%data%", bio.name));
var formattedRole = htmlWrapper(HTMLheaderRole.replace("%data%", bio.role));
var myMain = document.getElementById('main');
var fRoleLength = formattedRole.length;
for (var i = fRoleLength - 1; i >= 0; i--) {
    myMain.insertBefore(formattedRole[i], myMain.firstChild);
}
myMain.insertBefore(formattedName, myMain.firstChild);


if (bio.skills.length > 0) {
    // jQuery solution
    // $('#header').append(HTMLskillsStart);
    // for (var i = 0; i < bio.skills.length; i++) {
    //     $('#skills').append(HTMLskills.replace('%data%', bio.skills[i]))
    // }

    // vanilla Js solution
    var skillsStart = htmlWrapper(HTMLskillsStart);
    for (var i = 0; i <= skillsStart.length; i++) {
        document.getElementById('header').appendChild(skillsStart[0]);
    }
    for (var i = 0; i < bio.skills.length; i++) {
        var sk = htmlWrapper(HTMLskills.replace("%data%", bio.skills[i]));
        document.getElementById('skills').appendChild(sk)
    }

}

displayWork();

// Vanilla Js solution
document.getElementById('main').appendChild(htmlWrapper(internationalizeButton));

function htmlWrapper(htmlInput) {
    var wrapper = document.createElement('div');
    wrapper.innerHTML = htmlInput;
    if (wrapper.childElementCount > 1) {
        return wrapper.childNodes;
    } else {
        return wrapper.firstChild;
    }
}

function displayWork() {
    for (job in work.jobs) {
        var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
        var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
        var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);

        // jQuery solution
        // $('#workExperience').append(HTMLworkStart);
        // $('.work-entry:last').append(formattedEmployerTitle);
        // $('.work-entry:last').append(formattedDates);
        // $('.work-entry:last').append(formattedLocation);
        // $('.work-entry:last').append(formattedDescription);

        // Vanilla Js solution
        document.getElementById('workExperience').appendChild(htmlWrapper(HTMLworkStart));
        var workEntries = document.getElementsByClassName('work-entry');
        var lastWorkEntry = workEntries[workEntries.length-1];
        lastWorkEntry.appendChild(htmlWrapper(formattedEmployerTitle));
        lastWorkEntry.appendChild(htmlWrapper(formattedDates));
        lastWorkEntry.appendChild(htmlWrapper(formattedLocation));
        lastWorkEntry.appendChild(htmlWrapper(formattedDescription));
    }
}

function inName(_name) {
    var names = _name.trim().split(" ");
    var firstName = names[0].slice(0, 1).toUpperCase() + names[0].slice(1).toLowerCase();
    var lastName = names[1].toUpperCase();
    return [firstName, lastName].join(" ");
}