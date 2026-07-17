/*=========================================
ANISH PERFORMANCE MOTORS
script.js
==========================================*/


/*=========================================
LOADER
==========================================*/

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    loader.style.visibility = "hidden";

});



/*=========================================
BACK TO TOP BUTTON
==========================================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});



/*=========================================
NAVBAR BACKGROUND
==========================================*/

const nav = document.querySelector("nav");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        nav.style.background = "rgba(0,0,0,.92)";

        nav.style.padding = "14px 8%";

        nav.style.boxShadow = "0 10px 25px rgba(0,0,0,.35)";

    }

    else {

        nav.style.background = "rgba(0,0,0,.55)";

        nav.style.padding = "18px 8%";

        nav.style.boxShadow = "none";

    }

});



/*=========================================
MOBILE MENU
==========================================*/

const menuBtn = document.getElementById("menuBtn");

const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {

    menu.classList.toggle("active");

});



/*=========================================
CLOSE MENU AFTER CLICK
==========================================*/

document.querySelectorAll("#menu a").forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

    });

});



/*=========================================
COUNTER ANIMATION
==========================================*/

const counters = document.querySelectorAll(".counter");

const speed = 120;

const startCounter = () => {

    counters.forEach(counter => {

        const update = () => {

            const target = +counter.getAttribute("data-target");

            const count = +counter.innerText;

            const increment = Math.ceil(target / speed);

            if (count < target) {

                counter.innerText = count + increment;

                setTimeout(update, 18);

            }

            else {

                counter.innerText = target;

            }

        };

        update();

    });

};

let counterStarted = false;

window.addEventListener("scroll", () => {

    const stats = document.querySelector(".stats");

    const position = stats.getBoundingClientRect().top;

    if (position < window.innerHeight && !counterStarted) {

        counterStarted = true;

        startCounter();

    }

});



/*=========================================
TYPING EFFECT
==========================================*/

const words = [

    "Dream Car",

    "BMW M",

    "Supercar",

    "Hypercar",

    "Performance"

];

let wordIndex = 0;

let charIndex = 0;

let deleting = false;

const typingElement = document.querySelector(".typing");

function typeEffect() {

    if (!typingElement) return;

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent = currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1200);

            return;

        }

    }

    else {

        typingElement.textContent = currentWord.substring(0, charIndex--);

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();



/*=========================================
SMOOTH ACTIVE MENU
==========================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.offsetHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});



/*=========================================
BUTTON RIPPLE EFFECT
==========================================*/

const buttons = document.querySelectorAll(".btn,.btn2,.details");

buttons.forEach(button => {

    button.addEventListener("mouseenter", function () {

        this.style.transition = ".3s";

        this.style.transform = "translateY(-4px) scale(1.03)";

    });

    button.addEventListener("mouseleave", function () {

        this.style.transform = "translateY(0) scale(1)";

    });

});



/*=========================================
CARD HOVER
==========================================*/

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow = "0 25px 60px rgba(0,162,255,.25)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow = "";

    });

});



/*=========================================
CONTACT FORM
==========================================*/

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = form.querySelector('input[type="text"]');

        const email = form.querySelector('input[type="email"]');

        if (name.value.trim() === "") {

            alert("Please enter your name.");

            return;

        }

        if (email.value.trim() === "") {

            alert("Please enter your email.");

            return;

        }

        alert("Thank you! Your inquiry has been received.");

        form.reset();

    });

}



/*=========================================
PARALLAX HERO
==========================================*/

window.addEventListener("scroll", function () {

    const hero = document.querySelector(".hero");

    const scroll = window.pageYOffset;

    if (hero) {

        hero.style.backgroundPositionY = scroll * 0.5 + "px";

    }

});



/*=========================================
IMAGE FADE-IN
==========================================*/

const images = document.querySelectorAll("img");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

});

images.forEach(img => {

    img.style.opacity = "0";

    img.style.transform = "translateY(40px)";

    img.style.transition = ".8s";

    observer.observe(img);

});



/*=========================================
WELCOME MESSAGE
==========================================*/

setTimeout(() => {

    console.log(

        "%cWelcome to ANISH PERFORMANCE MOTORS",

        "color:#00A2FF;font-size:18px;font-weight:bold;"

    );

}, 1000);
