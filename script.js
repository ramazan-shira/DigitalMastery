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

//Chart
var dataset = [
  { name: "Programming", percent: 34.1 },
  { name: "Cyber Security", percent: 27.7 },
  { name: "Design", percent: 24.5 },
  { name: "Digital marketing", percent: 13.7 },
];

var pie = d3.layout
  .pie()
  .value(function (d) {
    return d.percent;
  })
  .sort(null)
  .padAngle(0.03);

var w = 250,
  h = 250;

var outerRadius = w / 2;
var innerRadius = 80;

var color = d3.scale.category10();

var arc = d3.svg.arc().outerRadius(outerRadius).innerRadius(innerRadius);

var svg = d3
  .select("#chart")
  .append("svg")
  .attr({
    width: w,
    height: h,
    class: "shadow",
  })
  .append("g")
  .attr({
    transform: "translate(" + w / 2 + "," + h / 2 + ")",
  });
var path = svg
  .selectAll("path")
  .data(pie(dataset))
  .enter()
  .append("path")
  .attr({
    d: arc,
    fill: function (d, i) {
      return color(d.data.name);
    },
  });

path
  .transition()
  .duration(1000)
  .attrTween("d", function (d) {
    var interpolate = d3.interpolate({ startAngle: 0, endAngle: 0 }, d);
    return function (t) {
      return arc(interpolate(t));
    };
  });

var restOfTheData = function () {
  var text = svg
    .selectAll("text")
    .data(pie(dataset))
    .enter()
    .append("text")
    .transition()
    .duration(200)
    .attr("transform", function (d) {
      return "translate(" + arc.centroid(d) + ")";
    })
    .attr("dy", ".2em")
    .attr("text-anchor", "middle")
    .text(function (d) {
      return d.data.percent + "%";
    })
    .style({
      fill: "#fff",
      "font-size": "10px",
    });

  var legendRectSize = 20;
  var legendSpacing = 7;
  var legendHeight = legendRectSize + legendSpacing;

  var legend = svg
    .selectAll(".legend")
    .data(color.domain())
    .enter()
    .append("g")
    .attr({
      class: "legend",
      transform: function (d, i) {
        //Just a calculation for x & y position
        return "translate(-35," + (i * legendHeight - 65) + ")";
      },
    });
  legend
    .append("rect")
    .attr({
      width: legendRectSize,
      height: legendRectSize,
      rx: 20,
      ry: 20,
    })
    .style({
      fill: color,
      stroke: color,
    });

  legend
    .append("text")
    .attr({
      x: 20,
      y: 15,
    })
    .text(function (d) {
      return d;
    })
    .style({
      fill: "#237",
      "font-size": "12px",
    });
};

setTimeout(restOfTheData, 1000);

// Admission form validation
var fullName = document.getElementById("full-name");
var emailAddress = document.getElementById("email-address");
var phone = document.getElementById("phone");

var gender = document.querySelectorAll('.input.gender input[type="radio"]');

var female = document.getElementById("female");
var male = document.getElementById("male");
var course = document.getElementById("course");
var selectedCourse = course.selectedIndex;
var selectedCourseValue = course.options[selectedCourse].value;
var selectedCourseText = course.options[selectedCourse].text;

var knowledge = document.querySelectorAll(
  '.input-item.coding input[type="checkbox"]'
);

var password = document.getElementById("password");
var confirmPassword = document.getElementById("confirm-password");

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

//Validate course
course.addEventListener("change", function (e) {
  selectedCourseValue = this.value;
  const selectedIndex = this.selectedIndex;
  selectedCourseText = this.options[selectedIndex].text;
});

var fileInput = document.getElementById("file").req;

function fileValidation() {
  var filePath = fileInput.value;
  var allowedExtensions =
    /(\.doc|\.docx|\.odt|\.pdf|\.tex|\.txt|\.rtf|\.wps|\.wks|\.wpd)$/i;
  var x = document.getElementById("myFile").required;

  if (!allowedExtensions.exec(filePath)) {
    fileError.innerText = "Invalid file type";
    fileInput.value = "";
    valid = false;
  } else {
    valid = true;
    fileError.innerText = "";
  }
}

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

  //Check if file is uploaded successfully
  if (fileError.innerText === "") {
    valid = true;
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

  if (valid) {
    registeredMessage.style.display = "flex";
    registered.innerText = `Congratulations ${fullName.value}!!You are registered to ${selectedCourseText} course.`;
  }
};

clearBtn.addEventListener("click", function (e) {
  fullName.value = "";
  emailAddress.value = "";
  phone.value = "";
  female.checked = false;
  male.checked = false;
  course.selectedIndex = 0;
  // fileInput.value = "";
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
  fileError.innerText = "";
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
