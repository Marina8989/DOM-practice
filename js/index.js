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

let textContentOne = document.querySelector(".one");
let textContentTwo = document.querySelector(".two");
let textContentThree = document.querySelector(".three");
let textContentFour = document.querySelector(".four");
let textContentFive = document.querySelector(".five");
let imagHero = document.getElementById("middle-img");
let pTextContentOne = document.querySelector("p");
let pTextContentTwo = document.querySelector("p");
let topContent = document.querySelector("top-content");
let h4One = document.querySelector("h4");
let h4Two = document.querySelector("h4");
let h4Three = document.querySelector("h4");
let h4Four = document.querySelector("h4");
let h4Five = document.querySelector("h4");

topContent.style.flex = "flex";

imagHero.src = siteContent["main-content"]["middle-img-src"];
document.querySelector(".main-content").appendChild(imagHero);


h4One.textContent = siteContent["main-content"]["features-h4"];
pTextContentOne.textContent = siteContent["main-content"]["features-content"];

textContentOne.appendChild(h4One);
textContentOne.appendChild(pTextContentOne);
topContent.appendChild(textContentOne);



h4Two.textContent = siteContent["main-content"]["about-h4"];
pTextContentTwo.textContent = siteContent["main-content"]["about-content"];

textContentTwo.appendChild(h4Two);
textContentTwo.appendChild(pTextContentTwo);
topContent.appendChild(textContentTwo);












h4Two.textContent = siteContent["main-content"]["about-h4"];

h4Three.textContent = siteContent["main-content"]["services-h4"];
h4Four.textContent = siteContent["main-content"]["product-h4"];
h4Five.textContent = siteContent["main-content"]["vision-h4"];


textContentTwo.appendChild(h4Two);
textContentThree.appendChild(h4Three);
textContentFour.appendChild(h4Four);
textContentFive.appendChild(h4Five);