const siteContent = {
    "nav": {
        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "About",
        "nav-item-6": "Contact",
        "img-src": "img/logo.png"
    },
    "cta": {
        "h1": "DOM Is Awesome",
        "button": "Get Started",
        "img-src": "img/header-img.png"
    },
    "main-content": {
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
        "contact-h4": "Contact",
        "address": "123 Way 456 Street Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },
    "footer": {
        "copyright": "Copyright Great Idea! 2018"
    },
};



let nav = document.querySelector("nav");
let a1 = document.querySelector('#a1');
let a2 = document.querySelector('#a2');
let a3 = document.querySelector('#a3');
let a4 = document.querySelector('#a4');
let a5 = document.querySelector('#a5');
let a6 = document.querySelector('#a6');

a1.textContent = siteContent["nav"]["nav-item-1"];
a2.textContent = siteContent["nav"]["nav-item-2"];
a3.textContent = siteContent["nav"]["nav-item-3"];
a4.textContent = siteContent["nav"]["nav-item-4"];
a5.textContent = siteContent["nav"]["nav-item-5"];
a6.textContent = siteContent["nav"]["nav-item-6"];

nav.appendChild(a1);
nav.appendChild(a2);
nav.appendChild(a3);
nav.appendChild(a4);
nav.appendChild(a5);
nav.appendChild(a6);

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// cta section
let ctaImg = document.getElementById("cta-img");
ctaImg.src = siteContent["cta"]["img-src"];

let h1 = document.querySelector("h1");
h1.textContent = siteContent["cta"]["h1"];

let button = document.querySelector("button");
button.textContent = siteContent["cta"]["button"];

document.querySelector(".cta-text").appendChild(h1);
document.querySelector(".cta-text").appendChild(button);


//main section
let topContent = document.querySelector(".top-content");
let one = document.querySelector(".one");
let two = document.querySelector(".two");

let textContentH4One = document.querySelector("#h4One");
let textContentPOne = document.querySelector("#pOne");

let textContentH4Two = document.querySelector("#h4Two");
let textContentPTwo = document.querySelector("#pTwo");

let middleImg = document.querySelector("#middle-img");

let bottomContent = document.querySelector(".bottom-content");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");


textContentH4One.textContent = siteContent["main-content"]["features-h4"];
textContentPOne.textContent = siteContent["main-content"]["features-content"];

textContentH4Two.textContent = siteContent["main-content"]["about-h4"];
textContentPTwo.textContent = siteContent["main-content"]["about-content"];

middleImg.src = siteContent["main-content"]["middle-img-src"];

let textContentH4Three = document.querySelector("#h4Three");
let textContentPThree = document.querySelector("#pThree");

let textContentH4Four = document.querySelector("#h4Four");
let textContentPFour = document.querySelector("#pFour");

let textContentH4Five = document.querySelector("#h4Five");
let textContentPFive = document.querySelector("#pFive");

textContentH4Three.textContent = siteContent["main-content"]["services-h4"];
textContentPThree.textContent = siteContent["main-content"]["services-content"];

textContentH4Four.textContent = siteContent["main-content"]["product-h4"];
textContentPFour.textContent = siteContent["main-content"]["product-content"];

textContentH4Five.textContent = siteContent["main-content"]["vision-h4"];
textContentPFive.textContent = siteContent["main-content"]["vision-content"];


one.appendChild(textContentH4One);
one.appendChild(textContentPOne);

two.appendChild(textContentH4Two);
two.appendChild(textContentPTwo);

three.appendChild(textContentH4Three);
three.appendChild(textContentPThree);

four.appendChild(textContentH4Four);
four.appendChild(textContentPFour);

five.appendChild(textContentH4Five);
five.appendChild(textContentPFive);



//contact
let contact = document.querySelector(".contact");

let footerH4 = document.querySelector("#footer-h4");
footerH4.textContent = siteContent["contact"]["contact-h4"];
let footerP1 = document.querySelector("#footer-p1");
footerP1.textContent = siteContent["contact"]["address"];
let footerP2 = document.querySelector("#footer-p2");
footerP2.textContent = siteContent["contact"]["phone"];
let footerP3 = document.querySelector("#footer-p3");
footerP3.textContent = siteContent["contact"]["email"];


contact.appendChild(footerH4);
contact.appendChild(footerP1);
contact.appendChild(footerP2);
contact.appendChild(footerP3);

//footer
let footer = document.querySelector("footer");
let footerP = document.querySelector("footer p");
footerP.textContent = siteContent["footer"]["copyright"];