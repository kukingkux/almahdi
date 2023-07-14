const swiper = new Swiper(".productSwiper", {
  parallax: true,
  speed: 1250,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: "true",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const coverflow = new Swiper(".card-swiper", {
  effect: "coverflow",
  loop: true,
  speed: 800,

  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: -30,
    stretch: 200,
    depth: 200,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination-2",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const scrollProgressElement = document.querySelector("#scroll-progress");

const scrollProgress = function () {
  const totalHeight = document.body.scrollHeight;
  const current = document.documentElement.scrollTop;

  const windowHeight = document.documentElement.clientHeight;

  const scrolled = (current / (totalHeight - windowHeight)) * 100;

  scrollProgressElement.style.height = Math.round(scrolled) + "%";
};

document.addEventListener("scroll", scrollProgress);

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}
