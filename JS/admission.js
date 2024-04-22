// Admission form validation
//Take all input fields and store them in variables to validate
var fullName = document.getElementById("full-name");
var emailAddress = document.getElementById("email-address");
var phone = document.getElementById("phone");

// Use of arrays to store same type input fields, in this case gender radio buttons
var gender = document.querySelectorAll('.input.gender input[type="radio"]');

var course = document.getElementById("course");
var selectedCourse = course.selectedIndex;
var selectedCourseValue = course.options[selectedCourse].value;
var selectedCourseText = course.options[selectedCourse].text;

// Use of arrays to store same type input fields, in this case for modules
var knowledge = document.querySelectorAll(
  '.input-item.coding input[type="checkbox"]'
);

var password = document.getElementById("password");
var confirmPassword = document.getElementById("confirm-password");

// When any of the fields is not filled correctly, we use a span to show the error message
// This would be done by using an array and storing the error message in the array, but using that would be difficult to validate all conditions(length, characters permitted, etc...)
var nameError = document.getElementById("name-error");
var emailError = document.getElementById("email-error");
var phoneError = document.getElementById("phone-error");
var genderError = document.getElementById("gender-error");
var courseError = document.getElementById("course-error");

var fileError = document.getElementById("file-error");

var knowledgeError = document.getElementById("knowledge-error");
var passError = document.getElementById("pass-error");
var confPassError = document.getElementById("conf-pass-error");

var registeredMessage = document.getElementById("registered-message");
var registered = document.getElementById("registered");

// To validate input fields, we use regular expressions
const fullNameLengthRegex = /^.{3,}\s.{3,}$/;
const fullNameCharacterRegex = /^[a-zA-Z]+\s[a-zA-Z]+$/;
const regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regPhone = /^\d{3}-\d{7}$/;
const regPassUppercase = /.*[A-Z].*/;
const regPassLowercase = /.*[a-z].*/;
const regPassDigit = /.*\d.*/;
const regPassSpecialchar = /.*[!@#$%^&*()\-_=+{};:,<.>].*/;
const regPassLength = /.{8,}/;

const clearBtn = document.getElementById("clear");

//We use a boolean variable that indicates whether the fields are filled correctly.In the end, if the value is true, the success message is displayes
var valid = true;

//Validate course
course.addEventListener("change", function (e) {
  selectedCourseValue = this.value;
  const selectedIndex = this.selectedIndex;
  selectedCourseText = this.options[selectedIndex].text;
});

//Input file validation
const dropArea = document.getElementById("drop-area");
const fileInput = document.getElementById("file-input");
const submitBtn = document.getElementById("submit-btn");

// Adding events for drag and drop areas
["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
  dropArea.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}

["dragenter", "dragover"].forEach((eventName) => {
  dropArea.addEventListener(eventName, highlight, false);
});

["dragleave", "drop"].forEach((eventName) => {
  dropArea.addEventListener(eventName, unhighlight, false);
});

function highlight() {
  dropArea.classList.add("highlight");
}

function unhighlight() {
  dropArea.classList.remove("highlight");
}

// File upload
dropArea.addEventListener("drop", handleDrop, false);

function handleDrop(e) {
  const dt = e.dataTransfer;
  const files = dt.files;

  handleFiles(files);
}

function handleFiles(files) {
  [...files].forEach(uploadFile);
}
dropArea.addEventListener("click", () => {
  fileInput.click();
});

fileInput.addEventListener("change", () => {
  const files = fileInput.files;
  handleFiles(files);
});

// Validation function for form submission
const register = () => {
  // Validate full name
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
  } else {
    valid = true;
    nameError.innerText = "";
  }

  //Validate email address
  if (emailAddress.value === "") {
    emailError.innerText = "Please enter your email address!";
    valid = false;
  } else if (!regEmail.test(emailAddress.value)) {
    emailError.innerText = "Invalid email address!";
    valid = false;
  } else {
    valid = true;
    emailError.innerText = "";
  }

  //Validate phone number
  if (phone.value === "") {
    phoneError.innerText = "Please enter your phone number!";
    valid = false;
  } else if (!regPhone.test(phone.value)) {
    phoneError.innerText = "Invalid phone number!Correct format: XXX-XXXXXXX";
    valid = false;
  } else {
    valid = true;
    phoneError.innerText = "";
  }

  //Validate gender
  var genderChecked = false;
  for (var i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      genderChecked = true;
    }
  }
  if (!genderChecked) {
    valid = false;
    genderError.innerText = "Please select your gender";
  } else {
    valid = true;
    genderError.innerText = "";
  }

  //Validate course
  if (selectedCourseValue === "select") {
    courseError.innerText = "Please select your course!";
    valid = false;
  } else {
    valid = true;
    courseError.innerText = "";
  }

  // File upload validation
  if (!fileInput.files || fileInput.files.length === 0) {
    fileError.innerText = "Please upload a file!";
    valid = false;
  } else {
    valid = true;
    fileError.innerText = "";
  }

  //Validate knowledge
  var anyCheckboxChecked = false;
  for (var i = 0; i < knowledge.length; i++) {
    if (knowledge[i].checked) {
      anyCheckboxChecked = true; // Një checkbox është zgjedhur
    }
  }

  if (!anyCheckboxChecked) {
    valid = false;
    knowledgeError.innerText = "Please choose a programming language";
  } else {
    valid = true;
    knowledgeError.innerText = "";
  }

  //Validate password
  if (password.value === "") {
    passError.innerText = "Please enter your password!";
    valid = false;
  } else if (!regPassLength.test(password.value)) {
    passError.innerText = "Password must contain at least 8 characters";
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
  } else {
    valid = true;
    passError.innerText = "";
  }

  //Validate confirm password
  if (confirmPassword.value === "") {
    confPassError.innerText = "Please enter your password!";
    valid = false;
  } else if (password.value !== confirmPassword.value) {
    confPassError.innerText = "Passwords do not match";
    valid = false;
  } else {
    valid = true;
    confPassError.innerText = "";
  }

  //Check if the fields are filled correctly
  if (valid) {
    registeredMessage.style.display = "flex";
    const img = document.createElement("img");
    img.src = "./Assets/Images/congrats.png";
    registeredMessage.appendChild(img);
    registered.innerText = `Congratulations ${fullName.value}!!You are registered to ${selectedCourseText} course.`;
  }
};

//Clear button
clearBtn.addEventListener("click", function (e) {
  fullName.value = "";
  emailAddress.value = "";
  phone.value = "";
  female.checked = false;
  male.checked = false;
  course.selectedIndex = 0;
  knowledge.checked = false;
  password.value = "";
  confirmPassword.value = "";
  nameError.innerText = "";
  emailError.innerText = "";
  phoneError.innerText = "";
  genderError.innerText = "";
  courseError.innerText = "";
  fileError.innerText = "";
  knowledgeError.innerText = "";
  passError.innerText = "";
  confPassError.innerText = "";
});
