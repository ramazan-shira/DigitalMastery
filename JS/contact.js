// Constact us validation
const submit = () => {
  const fname = document.getElementById("fname").value.trim();
  const lname = document.getElementById("lname").value.trim();
  const message = document.getElementById("message").value.trim();
  const email = document.getElementById("email").value.trim();
  const contactMessage = document.getElementById(" contact-message");

  const errorFname = document.getElementById("error-fname");
  const errorLname = document.getElementById("error-fname");
  const errorEmail = document.getElementById("error-email");
  const errorMessage = document.getElementById("error-message");

  const regEx = /^[a-zA-Z]+$/;
  const regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  var valid = true;

  if (!fname) {
    errorFname.innerText = "Please enter your first name";
    valid = false;
  } else if (fname.length < 3) {
    errorFname.innerText = "Last name must be at least 3 characters";
    valid = false;
  } else if (regEx.test(fname)) {
    errorFname.innerText = "Last name  must contain only letters!";
    valid = false;
  } else {
    valid = true;
    errorFname.innerText = "";
  }

  if (!lname) {
    errorLname.innerText = "Please enter your last name";
    valid = false;
  } else if (fname.length < 3) {
    errorLname.innerText = "Last name must be at least 3 characters";
    valid = false;
  } else if (regEx.test(fname)) {
    errorLname.innerText = "Last name  must contain only letters!";
    valid = false;
  } else {
    valid = true;
    errorLname.innerText = "";
  }

  //Validate email address
  if (email.value === "") {
    errorEmail.innerText = "Please enter your email address!";
    valid = false;
  } else if (!regEmail.test(email.value)) {
    errorEmail.innerText = "Invalid email address!";
    valid = false;
  } else {
    valid = true;
    errorEmail.innerText = "";
  }

  // Validate message
  if (!message) {
    errorMessage.innerText = "Please enter your message";
    valid = false;
  } else if (message.length < 10) {
    errorMessage.innerText = "Message must be at least 10 characters";
    valid = false;
  } else {
    valid = true;
    errorMessage.innerText = "";
  }

  if (valid) {
    var messageContact = document.createElement("p");
    messageContact.innerHTML = `Hello ${fname} ${lname}, we have received your message. Thank you for reaching out to us.`;
    contactMessage.appendChild(messageContact);
  }
};
