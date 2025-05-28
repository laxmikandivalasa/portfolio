/* Progress bar Effect */
const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".navbar-link");
const progress = document.querySelector(".progress-bars-wrapper");
const progressBarPercents = [97, 90,50, 60];

window.addEventListener("scroll", () => {
  mainFn();
});

const mainFn = () => {
  if (window.pageYOffset >= navbarOffsetTop) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

  sections.forEach((section, i) => {
    if (window.pageYOffset >= section.offsetTop - 10) {
      navbarLinks.forEach((navbarLink) => {
        navbarLink.classList.remove("change");
      });
      navbarLinks[i].classList.add("change");
    }
  });

  if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
    document.querySelectorAll(".progress-percent").forEach((el, i) => {
      el.style.width = `${progressBarPercents[i]}%`;
      el.previousElementSibling.firstElementChild.textContent =
        progressBarPercents[i];
    });
  }
};

mainFn();

window.addEventListener("resize", () => {
  window.location.reload();
});


particlesJS('particles-js', { //particles effect
	particles: {
	  number: { value: 50 },
	  color: { value: '#ffffff' },
	  shape: { type: 'circle' },
	  opacity: { value: 0.3 },
	  size: { value: 3 },
	  move: { enable: true, speed: 1 }
	},
	interactivity: {
	  events: { onhover: { enable: true, mode: 'repulse' } },
	  modes: { repulse: { distance: 100 } }
	},
	retina_detect: true
  });
  

/* Typing and Deleting Effect */
// List of sentences
var _CONTENT = [ 
	"SOFTWARE ENGINEER", 
	"FULL STACK WEB DEVELOPER",
    "OPEN SOURCE CONTRIBUTOR",
    "CODER"
];

var _PART = 0; // Current sentence being processed
var _PART_INDEX = 0; // Character number of the current sentence being processed 
var _INTERVAL_VAL; // Holds the handle returned from setInterval
var _ELEMENT = document.querySelector("#text-name"); // Element that holds the text
var _CURSOR = document.querySelector("#cursor"); // Cursor element 

// Implements typing effect
function Type() { 
	// Get substring with 1 characater added
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if(text === _CONTENT[_PART]) {
		// Hide the cursor
		_CURSOR.style.display = 'none';

		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 50);
		}, 1000);
	}
}

const skillsByCategory = {
    frontend: [
        { name: "HTML", icon: '<i class="devicon-html5-plain colored"></i>' },
        { name: "CSS", icon: '<i class="devicon-css3-plain colored"></i>' },
        { name: "JavaScript", icon: '<i class="devicon-javascript-plain colored"></i>' },
        { name: "React", icon: '<i class="devicon-react-original colored"></i>' },
        { name: "Tailwind CSS", icon: '<i class="devicon-tailwindcss-plain colored"></i>' },
        { name: "Bootstrap", icon: '<i class="devicon-bootstrap-plain colored"></i>' },
    ],
    backend: [
        { name: "Node.js", icon: '<i class="devicon-nodejs-plain colored"></i>' },
        { name: "Express", icon: '<i class="devicon-express-original colored"></i>' },
        { name: "MongoDB", icon: '<i class="devicon-mongodb-plain colored"></i>' },
        { name: "MySQL", icon: '<i class="devicon-mysql-plain colored"></i>' },
    ],
    ml: [
        { name: "Python", icon: '<i class="devicon-python-plain colored"></i>' },
        { name: "Scikit-learn", icon: '<i class="devicon-scikit-learn-plain colored"></i>' },
        { name: "Pandas/Numpy", icon: '<i class="devicon-numpy-original colored"></i>' },
        { name: "Matplotlib", icon: '<i class="fas fa-chart-bar"></i>' },
    ],
    soft: [
        { name: "Communication", icon: '<i class="fas fa-comments"></i>' },
        { name: "Teamwork", icon: '<i class="fas fa-users"></i>' },
        { name: "Time Management", icon: '<i class="fas fa-clock"></i>' },
    ],
    others: [
        { name: "Git & GitHub", icon: '<i class="devicon-git-plain colored"></i>' },
        { name: "C / C++", icon: '<i class="devicon-cplusplus-plain colored"></i>' },
		{ name: "Canva", icon: '<img src="canva.jpeg" alt="Canva" style="width: 60px; height: 60px;">' },
		{ name: "Postman", icon: '<img src="postmanlogo.png" alt="postman" style="width: 60px; height: 60px;">' },
    ],
};

function renderSkills(category) {
    const skillsContainer = document.getElementById("skills-container");
    skillsContainer.innerHTML = "";
    const skills = skillsByCategory[category];

    skills.forEach(skill => {
        const skillHTML = `
            <div class="skill-icon">
                ${skill.icon}
                <p>${skill.name}</p>
            </div>
        `;
        skillsContainer.innerHTML += skillHTML;
    });
}

// Handle button clicks
document.querySelectorAll(".category-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderSkills(btn.dataset.category);
    });
});

// Load default
newFunction();
function newFunction() {
	document.addEventListener("DOMContentLoaded", () => {
		renderSkills("frontend");
	});

	document.addEventListener("DOMContentLoaded", () => {
		const hamburger = document.getElementById('hamburger-menu');
        const mobileMenu = document.getElementById('mobile-menu');
      
        hamburger.addEventListener('click', () => {
          mobileMenu.classList.toggle('show');
        });
	});
}

// Implements deleting effect
function Delete() {
	// Get substring with 1 characater deleted
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;

	// If sentence has been deleted then start to display the next sentence
	if(text === '') {
		clearInterval(_INTERVAL_VAL);

		// If current sentence was last then display the first one, else move to the next
		if(_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;
		_PART_INDEX = 0;

		// Start to display the next sentence after some time
		setTimeout(function() {
			_CURSOR.style.display = 'inline-block';
			_INTERVAL_VAL = setInterval(Type, 100);
		}, 200);
	}
}
// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 100);



