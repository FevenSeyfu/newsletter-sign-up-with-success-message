
![Project Demo](https://github.com/FevenSeyfu/newsletter-sign-up-with-success-message/blob/main/newsletter-demo.webm)
# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv).A simple UI with form to receive email and check if email format is correct show success message if not valid it shows an error.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [Solution URL](https://github.com/FevenSeyfu/newsletter-sign-up-with-success-message)
- Live Site URL: [Live Site URL](https://newsletter-signup-feven.netlify.app/)

## My process

### Built with

- HTML5
- CSS custom properties
- Mobile-first workflow
- [Typescript](https://www.typescriptlang.org/)

### What I learned

With this project I have delved into typescript specifically  event handling and form validation with typescript.

```html
<form action="">
  <label for="email"
    >Email address
    <span class="error-message hidden">Valid email required</span>
  </label>
  <input type="email" placeholder="email@company.com" required />
  <button type="submit" disabled>Subscribe to monthly newsletter</button>
</form>
```

```ts
  const validateEmail = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
  };
  signupFormInput?.addEventListener("input", (e: Event) => {
    validateEmail((e.target as HTMLInputElement).value)
      ? handleValidEmail()
      : handleInvalidEmail();
  });
```

### Continued development

I want to expand my skill on typescript event handling and add more validation to the form input.

### Useful resources

- [Typescript documentation](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html) - This guide, typescript for Javascript programmers helped me to type my functions, events as well as event listeners. I really liked this  and will continue to use it going forward.

## Author

- Website - [Feven Seyfu](https://fevenseyfu.tech)
- Frontend Mentor - [@FevenSeyfu](https://www.frontendmentor.io/profile/FevenSeyfu)
- Twitter - [@FevenSeyfu](https://www.twitter.com/FevenSeyfu)

## Acknowledgments

I have completed this challenge as part of Womenwhocode frontend, #frontendfriday challenge I would like to thank the community for the feedback as well as the  continued support and thanks to Frontendmentor for the design files.

