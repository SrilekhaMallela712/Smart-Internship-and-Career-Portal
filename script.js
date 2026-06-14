/* =========================
   INTERNSHIP DATA
========================= */

const internships = [

{
title:"Web Development Internship",
category:"web",
duration:"2 Months",
stipend:"₹5000",
desc:"Learn HTML, CSS, JavaScript, React and build responsive websites."
},

{
title:"Java Developer Internship",
category:"java",
duration:"3 Months",
stipend:"₹7000",
desc:"Work with Core Java, JDBC, Servlets and backend development."
},

{
title:"Python Programming Internship",
category:"python",
duration:"2 Months",
stipend:"₹6000",
desc:"Learn Python, APIs, automation and data processing."
},

{
title:"AI & Machine Learning Internship",
category:"ai",
duration:"3 Months",
stipend:"₹10000",
desc:"Build machine learning models and AI-powered applications."
}

];

/* =========================
   DISPLAY INTERNSHIPS
========================= */

const cardsContainer = document.getElementById("cards");

function displayInternships(data){

cardsContainer.innerHTML = "";

data.forEach(item => {

const card = document.createElement("div");

card.classList.add("card");

card.innerHTML = `
<h3>${item.title}</h3>

<p><strong>Duration:</strong> ${item.duration}</p>

<p><strong>Stipend:</strong> ${item.stipend}</p>

<button onclick="openModal(
'${item.title}',
'${item.desc}'
)">
View Details
</button>
`;

cardsContainer.appendChild(card);

});

}

displayInternships(internships);

/* =========================
   SEARCH
========================= */

const search = document.getElementById("search");

search.addEventListener("input", () => {

const value = search.value.toLowerCase();

const filtered = internships.filter(item =>
item.title.toLowerCase().includes(value)
);

displayInternships(filtered);

});

/* =========================
   FILTER BUTTONS
========================= */

const filters =
document.querySelectorAll(".filter");

filters.forEach(button => {

button.addEventListener("click", () => {

document
.querySelector(".filter.active")
.classList.remove("active");

button.classList.add("active");

const category =
button.dataset.category;

if(category === "all"){

displayInternships(internships);

}
else{

const filtered =
internships.filter(item =>
item.category === category
);

displayInternships(filtered);

}

});

});

/* =========================
   MODAL
========================= */

const modal =
document.getElementById("modal");

const modalTitle =
document.getElementById("modal-title");

const modalDesc =
document.getElementById("modal-desc");

function openModal(title,desc){

modal.style.display = "block";

modalTitle.innerText = title;

modalDesc.innerText = desc;

}

document
.getElementById("close")
.addEventListener("click", () => {

modal.style.display = "none";

});

window.addEventListener("click", e => {

if(e.target === modal){

modal.style.display = "none";

}

});

/* =========================
   DARK MODE
========================= */

const themeBtn =
document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {

document.body.classList.toggle("light");

});

/* =========================
   COUNTERS
========================= */

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter => {

const target =
+counter.dataset.target;

let count = 0;

const increment =
target / 100;

function updateCounter(){

if(count < target){

count += increment;

counter.innerText =
Math.ceil(count);

requestAnimationFrame(updateCounter);

}
else{

counter.innerText = target;

}

}

updateCounter();

});

/* =========================
   TESTIMONIALS
========================= */

const testimonials = [

{
text:"This internship helped me get my first placement offer.",
author:"Priya"
},

{
text:"The projects and mentorship were excellent.",
author:"Rahul"
},

{
text:"I gained practical experience and confidence.",
author:"Sneha"
},

{
text:"A fantastic learning platform for students.",
author:"Akash"
}

];

let testimonialIndex = 0;

const review =
document.getElementById("review");

const author =
document.getElementById("author");

function updateTestimonial(){

review.innerText =
testimonials[testimonialIndex].text;

author.innerText =
"- " + testimonials[testimonialIndex].author;

testimonialIndex++;

if(testimonialIndex >= testimonials.length){

testimonialIndex = 0;

}

}

updateTestimonial();

setInterval(updateTestimonial,3000);

/* =========================
   AI CAREER ADVISOR
========================= */

function recommendCareer(){

const interest =
document.getElementById("interest").value;

const result =
document.getElementById("result");

if(interest === "Java"){

result.innerHTML =
"✅ Recommended: Full Stack Java Developer Internship";

}

else if(interest === "Python"){

result.innerHTML =
"✅ Recommended: Python & Data Science Internship";

}

else if(interest === "Web Development"){

result.innerHTML =
"✅ Recommended: Front-End Web Developer Internship";

}

else if(interest === "Artificial Intelligence"){

result.innerHTML =
"✅ Recommended: AI & Machine Learning Internship";

}

}

/* =========================
   TYPED EFFECT
========================= */

if(typeof Typed !== "undefined"){

new Typed("#typed",{

strings:[
"Discover Premium Internships",
"Build Real Projects",
"Learn From Industry Experts",
"Launch Your Tech Career"
],

typeSpeed:60,
backSpeed:40,
backDelay:1500,
loop:true

});

}

/* =========================
   AOS ANIMATION
========================= */

if(typeof AOS !== "undefined"){

AOS.init({

duration:1000,
once:true

});

}

/* =========================
   CONTACT FORM
========================= */

const form =
document.querySelector("form");

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert(
"Message Sent Successfully!"
);

form.reset();

});

/* =========================
   NAVBAR ACTIVE LINK
========================= */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll",()=>{

let current = "";

sections.forEach(section=>{

const sectionTop =
section.offsetTop - 150;

if(scrollY >= sectionTop){

current = section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(
link.getAttribute("href")
=== "#" + current
){
link.classList.add("active");
}

});

});
document
.getElementById("applyBtn")
.addEventListener("click", () => {

    alert(
    "Application Submitted Successfully!"
    );

    modal.style.display = "none";

});