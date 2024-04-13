// Admission form validation
const fullName = document.getElementById("full-name").value;
const emailAddress = document.getElementById("email-address").value;
const phone = document.getElementById("phone").value;
const female = document.getElementById("female");
const male = document.getElementById("male");
const course = document.getElementById("course").value;
const java = document.getElementById("java");
const net = document.getElementById("net");
const javascript = document.getElementById("javascript");
const react = document.getElementById("react");
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

const register = () => {
  if (fullName === "") {
    nameError.innerText = "Please enter your full name!";
  } else if (!fullNameLengthRegex.test(fullName)) {
    nameError.innerText =
      "First name and last name must be at least 3 characters!";
  } else if (!fullNameCharacterRegex.test(fullName)) {
    nameError.innerText = "First name and last name must contain only letters!";
  }

  //Validate email address
  if (emailAddress === "") {
    emailError.innerText = "Please enter your email address!";
  } else if (!regEmail.test(emailAddress)) {
    emailError.innerText = "Invalid email address!";
  }
  //Validate phone number
  if (phone === "") {
    phoneError.innerText = "Please enter your phone number!";
  } else if (!regPhone.test(phone)) {
    phoneError.innerText = "Invalid phone number!Correct format: XXX-XXXXXXX";
  }
  //Validate gender
  if (female.checked == false && male.checked == false) {
    genderError.innerText = "Please select your gender!";

    //Validate course
  } else if (course.value === "") {
    courseError.innerText = "Please select your course!";
  }

  //Validate knowledge
  if (
    java.checked == false &&
    net.checked == false &&
    javascript.checked == false &&
    react.checked == false
  ) {
    knowledgeError.innerText = "Please choose a programming language";
  }

  //Validate password
  if (password === "") {
    passError.innerText = "Please enter your password!";
  } else if (!regPassUppercase.test(password)) {
    passError.innerText = "Password must contain at least one uppercase letter";
  } else if (!regPassLowercase.test(password)) {
    passError.innerText = "Password must contain at least one lowercase letter";
  } else if (!regPassDigit.test(password)) {
    passError.innerText = "Password must contain at least one digit";
  } else if (!regPassSpecialchar.test(password)) {
    passError.innerText =
      "Password must contain at least one special character";
  } else if (!regPassLength.test(password)) {
    passError.innerText = "Password must contain at least 8 characters";
  }

  //Validate confirm password
  if (password !== confirmPassword) {
    confPassError.innerText = "Passwords do not match";
  } else {
    alert(
      `Hey ${fullName.value}, you were registered to course ${course.value}`
    );
  }
};

const clear = () => {
  console.log("clicked");

  fullName = "";
  emailAddress = "";
  phone = "";
  female.checked = false;
  male.checked = false;
  course = "";
  java.checked = false;
  net.checked = false;
  javascript.checked = false;
  react.checked = false;
  password = "";
  confirmPassword.value = "";
  nameError.innerText = "";
  emailError.innerText = "";
  phoneError.innerText = "";
  genderError.innerText = "";
  courseError.innerText = "";
  knowledgeError.innerText = "";
  passError.innerText = "";
  confPassError.innerText = "";
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
