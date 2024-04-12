// Admission form validation
const fullName = document.getElementById("full-name");
const emailAddress = document.getElementById("email-address");
const phone = document.getElementById("phone");
const female = document.getElementById("female");
const male = document.getElementById("male");
const course = document.getElementById("course");
const java = document.getElementById("java");
const net = document.getElementById("net");
const javascript = document.getElementById("javascript");
const react = document.getElementById("react");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const phoneError = document.getElementById("phone-error");
const genderError = document.getElementById("gender-error");
const courseError = document.getElementById("course-error");
const knowledgeError = document.getElementById("knowledge-error");
const passError = document.getElementById("pass-error");
const confPassError = document.getElementById("conf-pass-error");

const fullNameLengthRegex = /^.{3,}\s.{3,}$/;
const fullNameCharacterRegex = /^[a-zA-Z]+\s[a-zA-Z]+$/;
const regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regPhone = /^\d{3}-\d{7}$/;
const regPassUppercase = /.*[A-Z].*/;
const regPassLowercase = /.*[a-z].*/;
const regPassDigit = /.*\d.*/;
const regPassSpecialchar = /.*[!@#$%^&*()\-_=+{};:,<.>].*/;
const regPassLength = /.{8,}/;

const register = () => {
  if (fullName === "") {
    nameError.innerHTML = "Please enter your full name!";
  } else if (fullNameLengthRegex.test(fullName)) {
    nameError.innerHTML =
      "First name and last name must be at least 3 characters!";
  } else if (fullNameCharacterRegex.test(fullName)) {
    nameError.innerHTML = "First name and last name must contain only letters!";
  }
  if (emailAddress === "") {
    emailError.innerHTML = "Please enter your email address!";
  } else if (regEmail.test(emailAddress)) {
    emailError.innerHTML = "Invalid email address!";
  }
  if (phone === "") {
    phoneError.innerHTML = "Please enter your phone number!";
  } else if (regPhone.test(phone)) {
    phoneError.innerHTML = "Invalid phone number!Correct format: XXX-XXXXXXX";
  }
  if (female.checked == false && male.checked == false) {
    genderError.innerHTML = "Please select your gender!";
  }
  if (course.value === "") {
    courseError.innerHTML = "Please select your course!";
  }
  if (
    java.checked == false &&
    net.checked == false &&
    javascript.checked == false &&
    react.checked == false
  ) {
    knowledgeError.innerHTML = "Please choose a programming language";
  }
  if (password === "") {
    passError.innerHTML = "Please enter your password!";
  } else if (regPassUppercase.test(password)) {
    passError.innerHTML = "Password must contain at least one uppercase letter";
  } else if (regPassLowercase.test(password)) {
    passError.innerHTML = "Password must contain at least one lowercase letter";
  } else if (regPassDigit.test(password)) {
    passError.innerHTML = "Password must contain at least one digit";
  } else if (regPassSpecialchar.test(password)) {
    passError.innerHTML =
      "Password must contain at least one special character";
  } else if (regPassLength.test(password)) {
    passError.innerHTML = "Password must contain at least 8 characters";
  }
  alert(`Hey ${fullName.value}, you were registered to course ${course.value}`);
};

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
