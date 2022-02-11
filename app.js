function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    var el = document.querySelectorAll('.bbb')
    var ellft = document.querySelectorAll('.lft')
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
    }
  }
    for (var i = 0; i < el.length; i++) {
      var windowHeightd = window.innerHeight;
      var elementTop2 = el[i].getBoundingClientRect().top;
      var elementVisiblec = 150;
  
      if (elementTop2 < windowHeightd - elementVisiblec) {
        el[i].classList.add("active");
      } else {
        el[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

const tl = gsap.timeline()

tl.from('.text1',1 , {y: 100 , opacity: 0 })
tl.from('.nav-left',1 , {y: -50 , opacity: 0} ,'-=1')
tl.from('ul',1 , {y: -50 , opacity: 0} ,'-=1')
tl.from('.humberger',1 , {y: -50 , opacity: 0} ,'-=1')

var typed = new Typed('.typing', {
    strings: [
        "Yotuber",
         "FullStack Developer",
         "FrontEnd  Developer",
         "BackEnd  Developer",
         "Freelancer",
        ],
    typeSpeed: 80,
    backSpeed: 80,
    loop: true
});

const humberger = document.querySelector('.humberger')
const mobile = document.querySelector('.mobile-menu')
const close = document.querySelector('.close')

humberger.addEventListener("click", ()=> {
    mobile.style.transform =`translateX(-300px)`
})
close.addEventListener("click", ()=> {
    mobile.style.transform =`translateX(0px)`
})

const content = document.querySelector('.content')
const name = document.querySelector('.name')
const email = document.querySelector('.email')
const msg = document.querySelector('.msg')

