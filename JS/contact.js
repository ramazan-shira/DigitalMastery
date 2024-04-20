// Constact us validation
const submit = () => {
  const fname = document.getElementById("fname").value.trim();
  const lname = document.getElementById("lname").value.trim();
  const message = document.getElementById("message").value.trim();
  const email = document.getElementById("email").value.trim();
  const contactMessage = document.getElementById(" contact-message");

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
    var messageContact = document.createElement("p");
    messageContact.innerHTML = `Hello ${fname} ${lname}, we have received your message. Thank you for reaching out to us.`;
    contactMessage.appendChild(messageContact);
  }
};
