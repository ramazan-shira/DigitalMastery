// Course categories
const all = document.getElementById("all");
const programming = document.getElementById("programming");
const security = document.getElementById("security");
const design = document.getElementById("design");
const marketing = document.getElementById("marketing");

const programmingCourses = document.getElementById("programming-courses");
const securityCourses = document.getElementById("security-courses");
const designCourses = document.getElementById("design-courses");
const marketingCourses = document.getElementById("marketing-courses");

//Create an event for each category chosen and display courses that belong to that category
all.addEventListener("click", function () {
  programmingCourses.style.display = "flex";
  securityCourses.style.display = "flex";
  designCourses.style.display = "flex";
  marketingCourses.style.display = "flex";
});

programming.addEventListener("click", function () {
  programmingCourses.style.display = "flex";
  securityCourses.style.display = "none";
  designCourses.style.display = "none";
  marketingCourses.style.display = "none";
});

security.addEventListener("click", function () {
  programmingCourses.style.display = "none";
  securityCourses.style.display = "flex";
  designCourses.style.display = "none";
  marketingCourses.style.display = "none";
});

design.addEventListener("click", function () {
  programmingCourses.style.display = "none";
  securityCourses.style.display = "none";
  designCourses.style.display = "flex";
  marketingCourses.style.display = "none";
});

marketing.addEventListener("click", function () {
  programmingCourses.style.display = "none";
  securityCourses.style.display = "none";
  designCourses.style.display = "none";
  marketingCourses.style.display = "flex";
});
