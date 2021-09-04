# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![Final Result](./images.FAQProject.jpg)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Sass
- Flexbox
- JavaScript
- Mobile-first workflow


### What I learned

This project was a bit challenging because of the many multimedia elements but that's part of the fun too. 

I'm quite proud of this function i added to hide the answers after 5 secs, see below:

```js
setTimeout(() => { 
        if(this.classList.contains('active')){
            this.classList.remove('active')
            panel.style.display = "none"
        }
    },5000)

```

### Continued development

Responsive design is something i really wish to practice more and also using JS to add functionality to sites since i'm now a bit more comfortable using JavaScript. I really want to refine those skills.



## Author

- Website - [YuriCodesBot](https://yuricodesbotportfolio.netlify.app/)
- Frontend Mentor - [@yuricodesbot](https://www.frontendmentor.io/profile/YuriCodes)
- Twitter - [@yuricodesbot](https://www.twitter.com/yuricodesbot)

