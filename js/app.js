/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const navlist = document.getElementById("navbar__list");
const sections = Array.from(document.querySelectorAll("section"));

function createListItem() {
    for (sect of sections) {
        listItem = document.createElement("li");
        listItem.innerHTML = `<li><a href="#${sect.id}" class="menu__link">${sect.dataset.nav}</a></li>`;
        navlist.appendChild(listItem);
    }
}
createListItem();



// Add class 'active' to section when near top of viewport
window.onscroll = function () {
    document.querySelectorAll("section").forEach(function (active) {
        if (
            active.getBoundingClientRect().top >= -390 &&
            active.getBoundingClientRect().top <= 150
        ) {
            active.classList.add("your-active-class");
        } else {
            active.classList.remove("your-active-class");
        }
    })
};



//Scroll to anchor ID using scrollTO event



/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


