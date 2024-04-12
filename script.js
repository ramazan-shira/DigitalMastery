// Admission form validation
const register = () => {
const fullName = document.getElementById("full-name").value;
const emailAddress = document.getElementById("email-address").value;
const phone = document.getElementById("phone").value;
const female = document.getElementById("female").value;
const male = document.getElementById("male").value;
const course = document.getElementById("course").value;
const java = document.getElementById("java").value;
const net = document.getElementById("net").value;
const javascript = document.getElementById("javascript").value;
const react = document.getElementById("react").value;
const password = document.getElementById("password").value;
const confirmPassword = document.getElementById("confirm-password").value;
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
  if (fullName === "") {
    nameError.innerHTML = "Please enter your full name!";
    return;
  }
  if (fullNameLengthRegex.test(fullName)) {
    nameError.innerHTML =
      "First name and last name must be at least 3 characters!";
    return;
  }
  if (fullNameCharacterRegex.test(fullName)) {
    nameError.innerHTML = "First name and last name must contain only letters!";
    return;
  }
  if (emailAddress === "") {
    emailError.innerHTML = "Please enter your email address!";
    return;
  }
  if (regEmail.test(emailAddress)) {
    emailError.innerHTML = "Invalid email address!";
    return;
  }
  if (phone === "") {
    phoneError.innerHTML = "Please enter your phone number!";
    return;
  }
  if (regPhone.test(phone)) {
    phoneError.innerHTML = "Invalid phone number!Correct format: XXX-XXXXXXX";
    return;
  }
  if (female.checked == false && male.checked == false) {
    genderError.innerHTML = "Please select your gender!";
    return;
  }
  if (course.value === "") {
    courseError.innerHTML = "Please select your course!";
    return;
  }
  if (
    java.checked == false &&
    net.checked == false &&
    javascript.checked == false &&
    react.checked == false
  ) {
    knowledgeError.innerHTML = "Please choose a programming language";
    return;
  }
  if (password === "") {
    passError.innerHTML = "Please enter your password!";
    return;
  }
  if (regPassUppercase.test(password)) {
    passError.innerHTML = "Password must contain at least one uppercase letter";
    return;
  }
  if (regPassLowercase.test(password)) {
    passError.innerHTML = "Password must contain at least one lowercase letter";
    return;
  }
  if (regPassDigit.test(password)) {
    passError.innerHTML = "Password must contain at least one digit";
    return;
  }
  if (regPassSpecialchar.test(password)) {
    passError.innerHTML =
      "Password must contain at least one special character";
    return;
  }
  if (regPassLength.test(password)) {
    passError.innerHTML = "Password must contain at least 8 characters";
    return;
  }
  if (password !== confirmPassword) {
    confPassError.innerHTML = "Passwords do not match";
    return;
  }

  alert(`Hey ${fullName.value}, you were registered to course ${course.value}`);
};

const clear = () => {
  console.log("clicked");

  fullName.value = "";
  emailAddress.value = "";
  phone.value = "";
  female.checked = false;
  male.checked = false;
  course.value = "";
  java.checked = false;
  net.checked = false;
  javascript.checked = false;
  react.checked = false;
  password.value = "";
  confirmPassword.value = "";
  nameError.innerHTML = "";
  emailError.innerHTML = "";
  phoneError.innerHTML = "";
  genderError.innerHTML = "";
  courseError.innerHTML = "";
  knowledgeError.innerHTML = "";
  passError.innerHTML = "";
  confPassError.innerHTML = "";
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
