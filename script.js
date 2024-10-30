function changeText(){
    const Elements = [" an Undergraduate"," a Tech Enthusiast","a React Learner"];
    const Text = document.querySelector(".aboutMe");
    const typingSpeed=100;
    const eraseSpeed = 100;
    const pauseSpeed = 1000;
    
    let textIndex = 0;
    let charIndex = 0;
    let Deleting = false;

    function type(){
        const currentText = Elements[textIndex];
        if(!Deleting && charIndex<currentText.length){
            Text.textContent += currentText[charIndex];
            charIndex++;
            setTimeout(type,typingSpeed);
        }
        else if(Deleting && charIndex>0){
            Text.textContent = currentText.substring(0,charIndex-1);
            charIndex--;
            setTimeout(type,eraseSpeed);
        }
        else{
            Deleting=!Deleting;
            if(!Deleting){
                textIndex = (textIndex+1)%Elements.length;
            }
            setTimeout(type,pauseSpeed);
        }
    }
    type()
}

changeText()


//Mobile content accessing
const nav = document.querySelector(".mobileNav");

function closeSideBar(){
    nav.style = "display:none";
}

function openSideBar(){
    nav.style = "display:block";
}

let darkModeBtn = document.querySelector(".fa-moon");
let lightModeBtn = document.querySelector("fa-sun");
let page = document.querySelector(".page");
let mail = document.querySelector(".fa-envelope");
let linkedin = document.querySelector(".fa-linkedin");
let github = document.querySelector(".fa-github");
let home = document.querySelector(".navHome");
let project = document.querySelector(".navProjects");
let projects = document.querySelector(".navProjectOverview");
let contactMe = document.querySelector(".navContactMe"); 

function darkMode(){
    page.classList.add("blackPage");
    mail.classList.add("darkIcon");
    linkedin.classList.add("darkIcon");
    github.classList.add("darkIcon");
    home.style = "color:white;box-shadow:0px 2px 5px white";
    project.style = "color:white;box-shadow:0px 2px 5px white";
    projects.style = "color:white;box-shadow:0px 2px 5px white";
    contactMe.style = "color:white;box-shadow:0px 2px 5px white";
}

function lightMode(){
    page.classList.remove("blackPage");
    mail.classList.remove("darkIcon");
    linkedin.classList.remove("darkIcon");
    github.classList.remove("darkIcon");
    home.style = "color:black;";
    project.style = "color:black;";
    projects.style = "color:black;";
    contactMe.style = "color:black;";
}