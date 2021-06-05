const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu');

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


// ========================scroll top============================
const scrollTop = document.querySelector('.scroll-top');
window.addEventListener('scroll', () => {
    if (this.scrollY > 300) {
        scrollTop.classList.add('show')
    } else {
        scrollTop.classList.remove('show') 
    }
})

// scrollTop.addEventListener('click', () => {
//     scrollTo(0,0)
// })


if (scrollTop) {
    scrollTop.addEventListener('click', (e) => {
        scrollTo(0,0)
    })
} 

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})




// =======================Reduce the size and print===================

function scaleCv() {
    document.body.classList.add('scale-cv')
}

// =======================Remove the size when print==================
function removeScale() {
    document.body.classList.remove('scale-cv');
}

// =======================Generate pdg file==================
let areaCv = document.getElementById('area-cv');

let resumeButton = document.getElementById('resume-button');


// =============Function to call Html to pdf option==================
let opt = {
    margin:       0,
    filename:     'myResume.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 4 },
    jsPDF:        { format: 'a4', orientation: 'portrait' }
  };

//   Function call to areaCv and Html2Pdf option 
function generateResume() {
    html2pdf(areaCv,opt)
}



// ========When the button is clicked run three function==================

resumeButton.addEventListener('click', () => {
    
//1. ===========The class .scale-cv is added to the body================
scaleCv()
    
 //2. =======================The PDG is generated==================   

generateResume()
    
 //3. ==============The .scale-cv class is remove after 5 second===============

    setTimeout(removeScale,5000)
    
})

// typing script----
var typed = new Typed(".typing", {
    strings: [
      "And I'm a Freelancer",
      "And I'm a Web Designer",
      "And I'm a Web Developer",
      "And I'm a YouTuber",
      "And I'm a Self Motivator",
      "And I'm a Blogger",
    ],
    typeSpeed: 30,
    backSpeed: 10,
    loop: true,
    smartBackspace: true,
    cursorChar: '❤',
  });


  //TODO: custom progress bar script----------->

const progress = document.getElementById("progressbar");
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
  let progressHeight = (window.pageYOffset / totalHeight) * 100;
  progress.style.height = progressHeight + "%";
};




// TODO: section shadow script--------------

const homeSec = document.getElementById('home');
const socialSec = document.querySelector('.social-section');
const profileSec = document.getElementById('profile');
const educationSec = document.getElementById('education');
const skillSec = document.getElementById('skills');
const experienceSec = document.getElementById('experience');
const certificateSec = document.getElementById('certificates');
const referenceSec = document.getElementById('reference');
const languageSec = document.getElementById('languages');
const interestSec = document.getElementById('interests');

const sectionsArr = [homeSec, profileSec, socialSec, educationSec, skillSec, experienceSec, certificateSec, referenceSec, languageSec, interestSec];

sectionsArr.forEach((section) => {
    section.addEventListener('mousemove', function (e) {
        section.classList.add('shadow');
        section.style.transition = 'all .2s';
        section.style.transform = `translateZ(200px)`;
    })
})

sectionsArr.forEach((section) => {
    section.addEventListener('mouseleave', function (e) {
        section.classList.remove('shadow');
        section.style.transition = 'all .5s ease-in-out';
        section.style.transform = `translateZ(0px)`;
    })
})





// TODO: preloader ===========================


const loader = document.querySelector('.loader');

// window.onload = setTimeout(() => {
//     $('.loader').fadeToggle();
// }, 3000);

if (window.onload) {
    setTimeout(() => {
        loader.style.visibility = 'hidden';
    }, 3000);
} else {
    loader.style.visibility = 'visible';
}

