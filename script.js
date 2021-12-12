

let scrollUp = document.querySelector('.scroll-up')


scrollUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    });
});


const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
  });


const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

let i = 0, myTitle;
myTitle = "Hello, I'm Amir Suljkanović.\r\nI'm a web developer.";

function typing () {
  if(i < myTitle.length) {
    document.querySelector('#mytitle').textContent += myTitle.charAt(i);
    i++;
    setTimeout(typing, 50);
  }
}

let j = 0, myP;
myP = "I have 1 year experience at HTML, CSS and Javascript. \r\nI value honesty and integrity above all else. These ideals \r\nguide my approach to problem solving and life in general." ;

function typingP () {
  if(j < myP.length) {
    document.querySelector('#myp').textContent += myP.charAt(j);
    j++;
    setTimeout(typingP, 30);
  }
}

setTimeout(typing, 400);
setTimeout(typingP, 3500);


function sendMail (params) {
  let tempParams = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  }
  emailjs.send('portfolio_email','template_nrdx09h', tempParams)
  .then(function(res) {
    console.log("succes", res.status);
  });
}