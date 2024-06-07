// ---------Home
const socialMapping={
    linkedin:"https://www.linkedin.com/in/riddh-modi-29a348226/",
    github:"https://github.com/Riddh2003",
    leetcode:"https://leetcode.com/u/RiddhModi/",
    gfgs:"https://www.geeksforgeeks.org/user/riddhmodi2003/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user",
    resume:"RiddhModi Java_Android Resume.pdf"
};
var social = document.querySelectorAll('.text-col img');

function logoOnClick(event){
    const first = event.currentTarget.classList;
    first.forEach(classgroup=>{
        if(socialMapping[classgroup]){
            window.open(socialMapping[classgroup],'_blank');
        }
    });
}

social.forEach(social => {
    social.addEventListener('click',logoOnClick);
});

var resumeButton = document.querySelector('.text-col button');
function resumeOnClick() {
    window.open('RiddhModi Java_Android Resume.pdf', '_blank');
}
resumeButton.addEventListener('click', resumeOnClick);

// --------menubar
function toggleMenu() {
    var navLinks = document.querySelector('.a');
    if(navLinks.classList.contains('show')){
        navLinks.classList.remove('show');
    }
    else{
        navLinks.classList.add('show');
    }
}
// -------Certificate
const urlMapping ={
    C:"https://certopus.com/c/7ab568ed89e84f1395cf63b51fbe1427",
    "C++":"https://certopus.com/c/dea64908ad3246409463f9ee40dadcff",
    HTML:"https://certopus.com/c/ac271bbaff534e8882cfc2d6a079bd2b",
    CSS:"https://certopus.com/c/87fe4843bb9447eb805ad5b13a6f4268",
    JavaScript:"https://certopus.com/c/7c51ed314e944888a897d46c251f7e66",
    sql:"https://certopus.com/c/7ab568ed89e84f1395cf63b51fbe1427",
    java:"https://certopus.com/c/fe5e27581a9a46e1ae70f2f7e9ea0d0f",
    ajava:"https://certopus.com/c/fe5e27581a9a46e1ae70f2f7e9ea0d0f",
    spring:"https://certopus.com/c/fe5e27581a9a46e1ae70f2f7e9ea0d0f",
    android:"https://certopus.com/c/0b7b512d4d6a4e459ce909fd74bbcea5"
};

var certificate = document.querySelectorAll('.certification-item');

function handleclick(event){
    const classes = event.currentTarget.firstElementChild.classList;
    classes.forEach(className =>{
        if(urlMapping[className]){
            window.open(urlMapping[className]);
        }
    });
}

certificate.forEach(certificate =>{
    certificate.addEventListener('click',handleclick);
});

// ----------Skills
const languages = {
    "c": 70,
    "c++": 50,
    "hc": 70,
    "JavaScript": 35,
    "sql": 70,
    "dsa":60,
    "java": 95,
    "ajava": 85,
    "spring": 90,
    "android": 85
};

function setKnowledgeLevel() {
    const bars = document.querySelectorAll('.c .inner-bar');
    bars.forEach(bar => {
        const lang = bar.parentElement.getAttribute('data-lang');
        const percentage = languages[lang];
        if (percentage !== undefined) {
            bar.style.width = percentage + '%';
            bar.textContent = percentage + '%';
            bar.textContent.margin = '2px';
        }
    });
}
setKnowledgeLevel();

// ---------Project

const projectMapping={
    webclone:"https://netflix-zeta-swart.vercel.app/",
    sumindex:"https://github.com/Riddh2003/SpringBootRoyal/blob/main/src/main/java/com/controller/FindArrayIndexController.java",
    weather:"https://github.com/Riddh2003/WeatherApplication/tree/main/Application",
    numgame:"https://github.com/Riddh2003/Codsoft/blob/main/Projects/NumberGame.java"
};

var project = document.querySelectorAll('.Project-box');

function projectclick(event) {
    const p = event.currentTarget.firstElementChild.classList;
    p.forEach(projectname=> {
        if(projectMapping[projectname]){
            window.open(projectMapping[projectname]);
        }
    });
}
project.forEach(project => {
    project.addEventListener('click',projectclick);
});

var projectBox = document.querySelector('.Project-box');

projectBox.addEventListener('click', function() {
    document.getElementById('menubar').scrollIntoView({ behavior: 'smooth' });
});

function handleProjectIconClick(event) {
    const githubURL = 'https://github.com/Riddh2003/Hospital-Management-System';
    const figmaURL = 'https://www.figma.com/board/nDNoyjJ82aNSHw2HtA2eI3/Hospital-Management-System?node-id=0-1';

    if (event.target.classList.contains('github')) {
        window.open(githubURL, '_blank');
    } else if (event.target.classList.contains('figma')) {
        window.open(figmaURL, '_blank');
    }
}

// Add event listeners to the GitHub and Figma icons inside the specific project box
const hospitalProjectBox = document.querySelector('.Project-box.hostipal');
const icons = hospitalProjectBox.querySelectorAll('.github, .figma');

icons.forEach(icon => {
    icon.addEventListener('click', handleProjectIconClick);
});
