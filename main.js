// The only changes made to this file is naming the function that closes the Nav Items. And I did that so we could re-execute it on click of the nav links to close the nav menu

window.onload = () => {
  const marqueeElement = document.getElementById('#marquee');
  marqueeElement.style.animationPlayState='running';
}



const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const menu = document.querySelector(".nav__items");

// open nav menu
menuBtn.addEventListener("click", () => {
    menu.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
})



// close nav menu function
const closeNavMenu = () => {
    menu.style.display = 'none';
    menuBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';
}

closeBtn.addEventListener("click", () => {
    closeNavMenu();
})





// show/hide faqs
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');
        // change icon
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'uil uil-plus') {
            icon.className = 'uil uil-minus';
        } else {
            icon.className = 'uil uil-plus';
        }
    })
})





// add background style to navbar
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
})




// close nav menu when any nav Items is clicked on tablets and mobile
const navItems = document.querySelectorAll('.nav__items li a');
if(window.innerWidth < 1024) {
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            closeNavMenu();
        })
    })
}




// swiperjs auto play slide
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  centeredSlides: false,
  loop: Infinity,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    599: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    1023: {
      slidesPerView: 3,
      spaceBetween: 60
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }
});

