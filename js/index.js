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
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
//query selectors
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Navigation Bar
const navBar = document.querySelectorAll('nav > a');

// console.log(navBar)
navBar [0] .textContent = siteContent.nav ['nav-item-1'];
navBar [1] .textContent = siteContent.nav ['nav-item-2'];
navBar [2] .textContent = siteContent.nav ['nav-item-3'];
navBar [3] .textContent = siteContent.nav ['nav-item-4'];
navBar [4] .textContent = siteContent.nav ['nav-item-5'];
navBar [5] .textContent = siteContent.nav ['nav-item-6'];

//Circle image
const circleImage = document.querySelector('#cta-img');
circleImage.src = siteContent.cta['img-src'];

//title
const title = document.querySelector ('h1');
title.textContent = siteContent.cta.h1

//Get Started Button
const button = document.querySelector ('button');
button.textContent = siteContent.cta.button;

const headFour = document.querySelectorAll('h4');
headFour [0] .textContent = siteContent["main-content"] ['features-h4'];
headFour [1] .textContent = siteContent["main-content"] ['about-h4'];
headFour [2] .textContent = siteContent["main-content"] ['services-h4'];
headFour [3] .textContent = siteContent["main-content"] ['product-h4'];
headFour [4] .textContent = siteContent["main-content"] ['vision-h4'];
headFour [5] .textContent = siteContent["main-content"] ['contact-h4'];
// console.log(headFour);

const pCont = document.querySelectorAll('p');
pCont [0] .textContent = siteContent["main-content"] ['features-content'];
pCont [1] .textContent = siteContent["main-content"] ['about-content'];
pCont [2] .textContent = siteContent["main-content"] ['services-content'];
pCont [3] .textContent = siteContent["main-content"] ['product-content'];
pCont [4] .textContent = siteContent["main-content"] ['vision-content'];
pCont [5] .textContent = siteContent["contact"] ['address'];
pCont [6] .textContent = siteContent["contact"] ['phone'];
pCont [7] .textContent = siteContent["contact"] ['email'];
pCont [8] .textContent = siteContent["footer"] ['copyright'];










console.log(pCont);
