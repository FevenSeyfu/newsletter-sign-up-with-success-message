import "./style.css";
import iconListSvg from './assets/images/icon-list.svg';
import iconSuccessSvg from './assets/images/icon-success.svg';

//set icons
// class="check-icon"
const SuccessSvg = document.getElementById('iconSuccessSvg') as HTMLImageElement;
SuccessSvg && (SuccessSvg.src = iconSuccessSvg);
const checkIcons = document.querySelectorAll('.check-list img');
checkIcons.forEach((checkIcon) => {
  const icon = checkIcon as HTMLImageElement;
  icon && (icon.src = iconListSvg);
});
let email: string | undefined;
const container = document.getElementsByClassName("container")[0];
const signupForm = document.getElementById("signup-form");
const signupButton = signupForm?.getElementsByTagName("button")[0];
const signupFormInput = signupForm?.getElementsByTagName("input")[0];
const signupFormError = signupForm?.getElementsByClassName("error-message")[0];
// success message
const successMessage = document.getElementById("success-message");
const inputEmail = successMessage?.getElementsByClassName("registered-email")[0];
const successMessageDismissButton =
  successMessage?.getElementsByTagName("button")[0];

// form validation, check email format and display success message or show error message
const validateEmail = (email: string) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailPattern.test(email);
};
const handleInvalidEmail = () => {
  signupButton?.setAttribute("disabled", "true");
  signupFormError?.classList.remove("hidden");
  signupFormInput?.classList.add("error");
};
const handleValidEmail = () => {
  email = signupFormInput?.value;
  signupButton?.removeAttribute("disabled");
  signupFormError?.classList.add("hidden");
  signupFormInput?.classList.remove("error");
};
signupFormInput?.addEventListener("input", (e: Event) => {
    validateEmail((e.target as HTMLInputElement).value)
        ? handleValidEmail()
        : handleInvalidEmail();
});

signupButton?.addEventListener("click", (e: Event) => {
    e.preventDefault();
    inputEmail && (inputEmail.textContent = email || '');
    signupForm?.classList.add("hidden");
    successMessage?.classList.remove("hidden");
    container?.classList.add("success");
});

successMessageDismissButton?.addEventListener("click", () => {
    successMessage?.classList.add("hidden");
    signupForm?.classList.remove("hidden");
    container?.classList.remove("success");
    signupFormInput && (signupFormInput.value = '');
});
