let menu = document.getElementById("menu-icon");
let navbar = document.querySelector(".navbar");

const showNav = () => {
  console.log("here");

  navbar.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("open");
};

// Admission form validation
var fullName = document.getElementById("full-name");
var emailAddress = document.getElementById("email-address");
var phone = document.getElementById("phone");
var female = document.getElementById("female");
var male = document.getElementById("male");
var course = document.getElementById("course");
var selectedCourse = course.selectedIndex;
var selectedCourseValue = course.options[selectedCourse].value;

var java = document.getElementById("java");
var net = document.getElementById("net");
var javascript = document.getElementById("javascript");
var react = document.getElementById("react");
var password = document.getElementById("password");
var confirmPassword = document.getElementById("confirm-password");

var nameError = document.getElementById("name-error");
var emailError = document.getElementById("email-error");
var phoneError = document.getElementById("phone-error");
var genderError = document.getElementById("gender-error");
var courseError = document.getElementById("course-error");
var knowledgeError = document.getElementById("knowledge-error");
var passError = document.getElementById("pass-error");
var confPassError = document.getElementById("conf-pass-error");

var registeredMessage = document.getElementById("registered-message");
var registered = document.getElementById("registered");

const fullNameLengthRegex = /^.{3,}\s.{3,}$/;
const fullNameCharacterRegex = /^[a-zA-Z]+\s[a-zA-Z]+$/;
const regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regPhone = /^\d{3}-\d{7}$/;
const regPassUppercase = /.*[A-Z].*/;
const regPassLowercase = /.*[a-z].*/;
const regPassDigit = /.*\d.*/;
const regPassSpecialchar = /.*[!@#$%^&*()\-_=+{};:,<.>].*/;
const regPassLength = /.{8,}/;

const clearBtn = document.getElementById("clear");
var valid = true;

const register = () => {
  if (fullName.value === "") {
    nameError.innerText = "Please enter your full name!";
    valid = false;
  } else if (!fullNameLengthRegex.test(fullName.value)) {
    nameError.innerText =
      "First name and last name must be at least 3 characters!";
    valid = false;
  } else if (!fullNameCharacterRegex.test(fullName.value)) {
    nameError.innerText = "First name and last name must contain only letters!";
    valid = false;
  }

  //Validate email address
  if (emailAddress.value === "") {
    emailError.innerText = "Please enter your email address!";
    valid = false;
  } else if (!regEmail.test(emailAddress.value)) {
    emailError.innerText = "Invalid email address!";
    valid = false;
  }
  //Validate phone number
  if (phone.value === "") {
    phoneError.innerText = "Please enter your phone number!";
    valid = false;
  } else if (!regPhone.test(phone.value)) {
    phoneError.innerText = "Invalid phone number!Correct format: XXX-XXXXXXX";
    valid = false;
  }
  //Validate gender
  if (!female.checked && !male.checked) {
    genderError.innerText = "Please select your gender!";
    valid = false;
  }

  //Validate course
  if (selectedCourseValue === "select") {
    courseError.innerText = "Please select your course!";
    valid = false;
  }

  //Validate knowledge
  if (!java.checked && !net.checked && !javascript.checked && !react.checked) {
    knowledgeError.innerText = "Please choose a programming language";
    valid = false;
  }

  //Validate password
  if (password.value === "") {
    passError.innerText = "Please enter your password!";
    valid = false;
  } else if (!regPassUppercase.test(password.value)) {
    passError.innerText = "Password must contain at least one uppercase letter";
    valid = false;
  } else if (!regPassLowercase.test(password.value)) {
    passError.innerText = "Password must contain at least one lowercase letter";
    valid = false;
  } else if (!regPassDigit.test(password.value)) {
    passError.innerText = "Password must contain at least one digit";
    valid = false;
  } else if (!regPassSpecialchar.test(password.value)) {
    passError.innerText =
      "Password must contain at least one special character";
    valid = false;
  } else if (!regPassLength.test(password.value)) {
    passError.innerText = "Password must contain at least 8 characters";
    valid = false;
  }

  //Validate confirm password
  if (confirmPassword.value === "") {
    confPassError.innerText = "Please enter your password!";
    valid = false;
  } else if (password.value !== confirmPassword.value) {
    confPassError.innerText = "Passwords do not match";
    valid = false;
  }

  if (valid) {
    registeredMessage.style.direction = "flex";
    register.innerText = `Congratulations ${fullName.value}!!You are registered to ${course.value} course.`;
  }
};

clearBtn.addEventListener("click", function (e) {
  fullName.value = "";
  emailAddress.value = "";
  phone.value = "";
  female.checked = false;
  male.checked = false;
  course.selectedIndex = 0;
  java.checked = false;
  net.checked = false;
  javascript.checked = false;
  react.checked = false;
  password.value = "";
  confirmPassword.value = "";
  nameError.innerText = "";
  emailError.innerText = "";
  phoneError.innerText = "";
  genderError.innerText = "";
  courseError.innerText = "";
  knowledgeError.innerText = "";
  passError.innerText = "";
  confPassError.innerText = "";
});

// Constact us validation
const submit = () => {
  const fname = document.getElementById("fname").value.trim();
  const lname = document.getElementById("lname").value.trim();
  const message = document.getElementById("message").value.trim();
  const email = document.getElementById("email").value.trim();

  const regEx = /^[a-zA-Z]+$/;

  if (fname === "" || lname === "" || email === "" || message === "") {
    alert("Please fill out all fileds");
  } else if (!regEx.test(fname)) {
    alert("First name should contain only letters!");
  } else if (fname.length < 3) {
    alert("First name should contain at least 3 characters");
  } else if (!regEx.test(lname)) {
    alert("Last name should contain only letters!");
  } else if (lname.length < 3) {
    alert("Last name should contain at least 3 characters");
  } else {
    alert(
      `Hello ${fname} ${lname}, we have received your message. Thank you for reaching out to us.`
    );
  }
};
