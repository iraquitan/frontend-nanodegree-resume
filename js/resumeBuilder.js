/*
 This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    name: "Iraquitan Cordeiro Filho",
    role: "Full Stack Web Developer",
    contacts: {
        mobile: "+55 91 98289-4092",
        email: "iraquitanfilho@gmail.com",
        github: "iraquitan",
        twitter: "@iraquitan_filho",
        location: "Belém"
    },
    biopic: "https://avatars1.githubusercontent.com/u/3467229?v=3&s=460",
    welcomeMessage: "Hi, I'm a Full Stack Web Developer",
    skills: ["Python", "Web development", "Javascript"],
    display: function () {
        var formattedName = HTMLheaderName.replace("%data%", this.name);
        var formattedRole = HTMLheaderRole.replace("%data%", this.role);

        // Vanilla Js solution
        var headerDiv = document.getElementById("header");
        headerDiv.innerHTML = formattedRole + headerDiv.innerHTML;
        headerDiv.innerHTML = formattedName + headerDiv.innerHTML;

        var formattedMobile = HTMLmobile.replace("%data%", this.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", this.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", this.contacts.github);
        var formattedTwitter = HTMLtwitter.replace("%data%", this.contacts.twitter);
        var formattedLocation = HTMLlocation.replace("%data%", this.contacts.location);

        var topContacts = document.getElementById("topContacts");
        topContacts.innerHTML += formattedMobile;
        topContacts.innerHTML += formattedEmail;
        topContacts.innerHTML += formattedGithub;
        topContacts.innerHTML += formattedTwitter;
        topContacts.innerHTML += formattedLocation;

        var formattedBiopic = HTMLbioPic.replace("%data%", this.biopic);
        var formattedWelcome = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
        headerDiv.innerHTML += formattedBiopic;
        headerDiv.innerHTML += formattedWelcome;

        if (bio.skills.length > 0) {
            document.getElementById("header").innerHTML += HTMLskillsStart;
            for (var i = 0; i < this.skills.length; i++) {
                var formattedSkill = HTMLskills.replace("%data%", this.skills[i]);
                document.getElementById("skills").innerHTML += formattedSkill;
            }
        }
    }
};
bio.display();

var work = {
    jobs: [
        {
            title: "Research Grantee",
            employer: "Vale Institute of Technology",
            dates: "2014 - Present",
            location: "Belém",
            description: "I do research in the Brain Computer Interfaces (BCI) field."
        }
    ],
    display: function () {
        for (var job in work.jobs) {
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

            document.getElementById("workExperience").appendChild(htmlWrapper(HTMLworkStart));
            var workEntries = document.getElementsByClassName("work-entry");
            var lastWorkEntry = workEntries[workEntries.length - 1];
            lastWorkEntry.appendChild(htmlWrapper(formattedEmployerTitle));
            lastWorkEntry.appendChild(htmlWrapper(formattedDates));
            lastWorkEntry.appendChild(htmlWrapper(formattedLocation));
            lastWorkEntry.appendChild(htmlWrapper(formattedDescription));
        }
    }
};
work.display();

var projects = {
    projects: [
        {
            title: "Javascript Portfolio Site",
            dates: 2016,
            description: "Udacity course fo Javascript basics.",
            images: [
                "http://www.codeproject.com/KB/web-image/Google_map/sampleMap.JPG",
                "https://developers.google.com/maps/images/lhimages/devices/3x1_runtastic.png"
            ]
        }
    ],
    display: function () {
        for (var project in this.projects) {
            var formattedProjTitle = HTMLprojectTitle.replace("%data%", this.projects[project].title);
            var formattedProjDates = HTMLprojectDates.replace("%data%", this.projects[project].dates);
            var formattedProjDescription = HTMLprojectDescription.replace("%data%", this.projects[project].description);

            document.getElementById("projects").appendChild(htmlWrapper(HTMLprojectStart));
            var projectEntries = document.getElementsByClassName("project-entry");
            var lastProjEntry = projectEntries[projectEntries.length - 1];
            lastProjEntry.appendChild(htmlWrapper(formattedProjTitle));
            lastProjEntry.appendChild(htmlWrapper(formattedProjDates));
            lastProjEntry.appendChild(htmlWrapper(formattedProjDescription));
            if (this.projects[project].images.length > 0) {
                // for (image in this.projects[project].images) {
                //     var formattedImage = HTMLprojectImage.replace("%data%", this.projects[project].images[image]);
                //     lastProjEntry.appendChild(htmlWrapper(formattedImage));
                // }
                for (var image of this.projects[project].images) {
                    var formattedImage = HTMLprojectImage.replace("%data%", image);
                    lastProjEntry.appendChild(htmlWrapper(formattedImage));
                }
            }
        }
    }
};
projects.display();

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
    ],
    display: function () {
        if (this.schools.length > 0) {
            for (var school in this.schools) {
                document.getElementById("education").innerHTML += HTMLschoolStart;
                var educationEntries = document.getElementsByClassName("education-entry");
                var lastEntry = document.getElementsByClassName("education-entry")[educationEntries.length - 1];
                var formattedName = HTMLschoolName.replace("%data%", this.schools[school].name);
                var formattedDates = HTMLschoolDates.replace("%data%", this.schools[school].dates);
                var formattedLocation = HTMLschoolLocation.replace("%data%", this.schools[school].location);
                var formattedDegree = HTMLschoolDegree.replace("%data%", this.schools[school].degree);
                lastEntry.innerHTML += formattedName + formattedDegree;
                lastEntry.innerHTML += formattedDates;
                lastEntry.innerHTML += formattedLocation;
                for (var major in this.schools.majors) {
                    formattedMajor = HTMLschoolMajor.replace("%data%", this.schools.majors[major]);
                    lastEntry.innerHTML += formattedMajor;
                }
            }
        }
        if (this.onlineCourses.length > 0) {
            for (var course in this.onlineCourses) {
                var educationEntries = document.getElementsByClassName("education-entry")
                var lastEntry = document.getElementsByClassName("education-entry")[educationEntries.length - 1];
                var formattedTitle = HTMLonlineTitle.replace("%data%", this.onlineCourses[course].title);
                var formattedSchool = HTMLonlineSchool.replace("%data%", this.onlineCourses[course].school);
                var formattedDates = HTMLonlineDates.replace("%data%", this.onlineCourses[course].dates);
                var formattedUrl = HTMLonlineURL.replace("%data%", this.onlineCourses[course].url);
                lastEntry.innerHTML += HTMLonlineClasses;
                lastEntry.innerHTML += formattedTitle + formattedSchool;
                lastEntry.innerHTML += formattedDates;
                lastEntry.innerHTML += formattedUrl;
            }
        }
    }
};
education.display();

$("#mapDiv").append(googleMap);

// Vanilla Js solution
document.getElementById("main").appendChild(htmlWrapper(internationalizeButton));

function htmlWrapper(htmlInput) {
    var wrapper = document.createElement("div");
    wrapper.innerHTML = htmlInput;
    if (wrapper.childElementCount > 1) {
        return wrapper.childNodes;
    } else {
        return wrapper.firstChild;
    }
}

function inName(_name) {
    var names = _name.trim().split(" ");
    var firstName = names[0].slice(0, 1).toUpperCase() + names[0].slice(1).toLowerCase();
    var lastName = names[1].toUpperCase();
    return [firstName, lastName].join(" ");
}