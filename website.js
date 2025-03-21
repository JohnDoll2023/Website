var history;

$(document).ready(function(){
    setInterval(rotator, 3000);
    footer();
    navbar();
});

function navbar() {
    // get document location
    var path = document.location.pathname;

    // qualifcations path
    var qualifications = "qualifications/";

    // projects path
    var projects = "projects/";

    // base path
    var base = "";

    // aria variables
    var indexAria = false;
    var projectsAria = false;
    var resumeAria = false;
    var qualificationsAria = false;
    var contactAria = false;

    // active variable
    var indexActive = "";
    var projectsActive = "";
    var resumeActive = "";
    var qualificationsActive = "";
    var contactActive = "";
    
    // if on qualifications page, set qualifications path
    if (path.includes(qualifications)) {
        qualifications = "";
        projects = "../" + projects;
        qualificationsAria = "page";
        qualificationsActive = "active";
        // if not on home page, set base path
    base = "../";
    } else if (path.includes(projects)) {
        projects = "";
        qualifications = "../" + qualifications;
        projectsAria = "page";
        projectsActive = "active";
        // if not on home page, set base path
    base = "../";
    // if path is index or if path is exactly johnmdoll.com
    } else if (path.includes("index.html") || path == "/") {
        indexAria = "page";
        indexActive = "active";
    } else if (path.includes("projects.html")) {
        projectsAria = "page";
        projectsActive = "active";
    } else if (path.includes("resume.html")) {
        resumeAria = "page";
        resumeActive = "active";
    } else if (path.includes("qualifications.html")) {
        qualificationsAria = "page";
        qualificationsActive = "active";
    } else if (path.includes("contact.html")) {
        contactAria = "page";
        contactActive = "active";
    }

    document.getElementById('nav').innerHTML = `
    <div class="container-fluid">
        <a class="navbar-brand" href="${base}index.html">
            <img src="${base}images/IMG_1854.jpeg" alt="Photo of John" width="60" height="60" class="d-inline-block" style="border-radius:20%">
        </a>
        <a class="navbar-brand navbg" href="${base}index.html">John Doll</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse navbar-nav-scroll" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link ${indexActive} navbg" aria-current="${indexAria}"  href="${base}index.html">Home</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle ${projectsActive} navbg" href="project.html" aria-current="${projectsAria}" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Projects
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="${base}projects.html">Projects Overview</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="${projects}current.html">This Website</a></li>
                        <li><a class="dropdown-item" href="${projects}covid.html">COVID-19 Dynamic Dashboard</a></li>
                        <li><a class="dropdown-item" href="${projects}old.html">Old Website</a></li>
                        <li><a class="dropdown-item" href="${projects}checkers.html">Checkers</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="">Daily Tennis App (coming soon)</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link navbg ${resumeActive}" href="${base}resume.html" aria-current="${resumeAria}">Resume</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle navbg ${qualificationsActive}" href="qualifications.html" aria-current="${qualificationsAria}" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Qualifications
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="${base}qualifications.html">Qualifications Overview</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="${qualifications}education.html">Miami University</a></li>
                        <li><a class="dropdown-item" href="${qualifications}amazon2.html">Amazon (Summer 2022)</a></li>
                        <li><a class="dropdown-item" href="${qualifications}amazon.html">Amazon (Summer 2021)</a></li>
                        <li><a class="dropdown-item" href="${qualifications}hw.html">Hospitality Wifi</a></li>
                        <li><a class="dropdown-item" href="${qualifications}church.html">St. Mark's</a></li>
                        <li><a class="dropdown-item" href="${qualifications}marathon.html">Marathon</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link navbg ${contactActive}" href="${base}contact.html" aria-current="${contactAria}">Contact Me</a>
                </li>
            </ul>
        </div>
    </div>
    `;
}

function footer() {
    // location of leetcode image
    var leetcodeImage = "images/leetcode.png";

    // get document location
    var path = document.location.pathname;

    // if ot on home page, set base path
    if (path.includes("qualifications/") || path.includes("projects/")) {
        leetcodeImage = "../" + leetcodeImage;
    }

    // create footer
    document.getElementById('footer').innerHTML = `
    <ul class="list-unstyled list-inline text-center">
        <li class="list-inline-item">
            <a class="btn-floating mx-1" href="https://www.youtube.com/channel/UCm9XHfS8Zkr9vs9REP0_T_Q" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style = "border-style: none;" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
            </a>
        </li>
        <li class="list-inline-item">
            <a class="btn-floating mx-1" href="https://www.linkedin.com/in/johnmdoll" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style = "border-style: none;" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
        </li>
        <li class="list-inline-item">
            <a class="btn-floating mx-1" href="https://github.com/JohnDoll2023" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style = "border-style: none;" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
        </li>
        <li class="list-inline-item">
            <a class="btn-floating mx-1" href="https://leetcode.com/JohnDoll2023/" target="_blank">
                <img src="${leetcodeImage}" id="leetcode" alt="Leetcode" width="24" height="24" style="border-style: none;" />
            </a>
        </li>
        <li class="list-inline-item">
            <a class="btn-floating mx-1" href="https://www.strava.com/athletes/59946814" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="border-style: none;" viewBox="0 0 24 24"><path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169"/></svg>
            </a>
        </li>
        <!--<li class="list-inline-item">
            <a class="btn-floating mx-1" href="app store" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="border-style: none;" viewBox="0 0 56 56"><path d="M28.347,5.157c-13.6,0-24.625,11.023-24.625,24.624c0,13.6,11.025,24.625,24.625,24.625c13.6,0,24.625-11.025,24.625-24.625  C52.972,16.18,41.946,5.157,28.347,5.157z M11.958,30.468v-4.371c0-0.371,0.302-0.674,0.676-0.674h7.556l-3.283,5.721h-4.272  C12.26,31.144,11.958,30.839,11.958,30.468z M17.336,39.706l-2.512,1.707c-0.34,0.232-0.578,0.088-0.532-0.322l0.337-2.928  c0.047-0.406,0.376-0.574,0.731-0.369l1.944,1.115C17.662,39.114,17.676,39.472,17.336,39.706z M18.961,37.78  c-0.205,0.355-0.664,0.479-1.02,0.273l-1.945-1.117c-0.355-0.203-0.48-0.662-0.275-1.018l2.742-4.775l3.286-5.721l2.98-5.194  c0.203-0.354,0.664-0.48,1.02-0.273l1.943,1.113c0.357,0.207,0.48,0.665,0.275,1.02l-2.734,4.762l-2.461,4.293L18.961,37.78z   M24.329,31.144l3.283-5.721h2.975c1.15,2.615,2.008,4.441,2.654,5.721H24.329z M35.962,33.063  c-0.777-0.393-4.656-9.344-5.65-11.678c-0.994-2.338-3.996-8.553-3.027-9.039c0.693-0.344,3.176,4.549,5.033,7.488  c1.061,1.678,2.781,4.866,4.152,7.456c0.018,0.033,0.035,0.068,0.053,0.102c0.062,0.117,0.123,0.234,0.184,0.348  c0.018,0.033,0.035,0.064,0.051,0.096c0.055,0.102,0.107,0.203,0.16,0.303c0.029,0.059,0.059,0.115,0.09,0.168  c0.033,0.068,0.068,0.135,0.102,0.199c0.047,0.088,0.094,0.174,0.141,0.26c0.006,0.018,0.014,0.031,0.021,0.047  c0.594,1.127,1.047,1.996,1.227,2.332c0.014,0.027,0.029,0.053,0.039,0.072c0.477,0.865-0.455,1.588-0.975,1.801  C37.042,33.233,36.741,33.45,35.962,33.063z M38.511,37.177l-1.17-1.852c-0.242-0.387-0.119-0.861,0.275-1.066l1.115-0.574  c0.395-0.201,0.887-0.037,1.098,0.365l0.926,1.779c0.209,0.402,0.066,0.92-0.314,1.145l-0.797,0.477  C39.265,37.683,38.753,37.558,38.511,37.177z M43.274,42.483c-0.246-0.787-2.115-0.838-2.953-2.018s-0.145-1.783,0.146-2.064  C43.862,36.487,43.274,42.483,43.274,42.483z M44.245,30.468c0,0.371-0.301,0.676-0.676,0.676h-3.625  c-0.049-0.197-0.121-0.391-0.223-0.578c-0.098-0.176-0.375-0.703-0.725-1.371c-0.504-0.961-1.219-2.324-1.992-3.771h6.564  c0.375,0,0.676,0.303,0.676,0.674V30.468z"/></svg>
            </a>
        </li>-->
    </ul>
    <div class="footer-copyright text-center" id="copyright"></div>
    `;
    copyright();
}

function copyright(){
    document.getElementById('copyright').innerHTML = "Copyright © John Doll " + new Date().getFullYear();
}

function fader() {
    document.getElementById("fade").style.opacity = 1;
}

// rotate words on index page
function rotator() {   
    var words = new Array("run.", "play tennis.", "be myself.", "use java.", "stay up late.", "workout.", "swim.", "sleep in.", "play fantasy baseball.", "code.", "throw frisbee.","have fun.", "be outside.", "play video games.", "compete.", "play baseball.", "fall asleep to thunderstorms.", "watch sports.", "make brackets for everything.", "play hockey.", "skate.", "make videos.", "be a creator.", "invent.", "be with my friends.", "watch the sunset.", "make things better.", "engineer.", "create websites.", "learn.", "catch up with friends.", "work on my computer.", "program.", "challenge myself.", "improve.", "be happy.", "spend time with family.", "make new things.", "innovate.");
    var random = Math.floor(Math.random()*words.length);
    while (random == history) {
        random = Math.floor(Math.random()*words.length);
    }
    history = random;
    $("#word").text(words[random]);
}

function resize() {
    var height = document.getElementById('code').clientHeight;
    var x = "" + height + "px";
    document.getElementById('video').style.height = x;
}