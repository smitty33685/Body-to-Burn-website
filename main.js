const overlayBtn = document.querySelectorAll(".btn-overlay");
const active = document.querySelector(".active");
const closeBtn = document.querySelectorAll(".btn-close");
const item = document.querySelectorAll(".item-x");

function showContent() {
  console.log(this.id);
  const tag = document.querySelector(`.${this.id}-content`);
  tag.classList.add("active");
  
}

function removeContent() {
  for (let i = 0; i < item.length; i++) {
    const uzNevim = item[i];
    console.log(uzNevim);

    uzNevim.classList.remove("active");
  }
}

//listen for click
for (let a = 0; a < overlayBtn.length; a++) {
  const button = overlayBtn[a];
  

  button.addEventListener("click", showContent);
}

//listen for click (remove)
for (let i = 0; i < closeBtn.length; i++) {
  const buttonClose = closeBtn[i];

  buttonClose.addEventListener("click", removeContent);
}

//Hamburger menu
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
const navActive = document.querySelector(".nav-active");
const close = document.querySelector(".close");

hamburger.addEventListener("click", function () {
  navbar.classList.add("nav-active");
});

close.addEventListener("click", function () {
  navbar.classList.remove("nav-active");
});
