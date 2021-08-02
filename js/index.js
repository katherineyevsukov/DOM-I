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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//adding nav links to the dom
let navLinks = document.querySelectorAll('nav a')
// console.log(navLinks)
//  const navLinksArray = Array.from(navLinks)

//   navLinksArray.map((link, idx) => {
//    return link.textContent = (siteContent['nav'][idx])
//  })

//  console.log(navLinksArray)
 
navLinks[0].textContent = (siteContent["nav"]["nav-item-1"])
navLinks[1].textContent = (siteContent["nav"]["nav-item-2"])
navLinks[2].textContent = (siteContent["nav"]["nav-item-3"])
navLinks[3].textContent = (siteContent["nav"]["nav-item-4"])
navLinks[4].textContent = (siteContent["nav"]["nav-item-5"])
navLinks[5].textContent = (siteContent["nav"]["nav-item-6"])

//change nav to green
navLinks.forEach(nav => nav.style.color = 'green')

//styling button

let button = document.querySelector('.cta-text button')
button.textContent = (siteContent["cta"]["button"])

//adding title
let title = document.querySelector('.cta h1')
title.textContent = (siteContent["cta"]["h1"])

//adding header img
let ctaImg = document.querySelector('#cta-img')
ctaImg.src = (siteContent['cta']['img-src'])


//adding main-content

let topContentHeader = document.querySelector('.top-content .text-content h4:nth-of-type(1)')
topContentHeader.textContent = (siteContent['main-content']['features-h4'])

let topContentHeaderTwo = document.querySelector('.top-content .text-content:nth-of-type(2) h4')
topContentHeaderTwo.textContent = (siteContent['main-content']['about-h4'])

const topConFirstPar = document.querySelector('.top-content .text-content p')
topConFirstPar.textContent = (siteContent['main-content']['features-content'])

const topConSecPar = document.querySelector('.top-content .text-content:nth-of-type(2) p')
topConSecPar.textContent = (siteContent['main-content']['about-content'])

console.log(topConSecPar)

//adding middle image

let midImg = document.querySelector('#middle-img')
midImg.src = (siteContent['main-content']['middle-img-src'])

//bottom page content

let firstBottomHeader = document.querySelector('.bottom-content .text-content:nth-of-type(1) h4')
firstBottomHeader.textContent = (siteContent['main-content']['services-h4'])

let secBottomHeader = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4')
secBottomHeader.textContent = (siteContent['main-content']['product-h4'])

let thirdBottomHeader = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4')
thirdBottomHeader.textContent = (siteContent['main-content']['vision-h4'])



let firstBottomPar = document.querySelector('.bottom-content .text-content:nth-of-type(1) p')
firstBottomPar.textContent = (siteContent['main-content']['services-content'])


let secBottomPar = document.querySelector('.bottom-content .text-content:nth-of-type(2) p')
secBottomPar.textContent = (siteContent['main-content']['product-content'])


let thirdBottomPar = document.querySelector('.bottom-content .text-content:nth-of-type(3) p')
thirdBottomPar.textContent = (siteContent['main-content']['vision-content'])