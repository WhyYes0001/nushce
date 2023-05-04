
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


let newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 24,
    loop: 'true',
    slidesPerView: "auto",
    centeredSlides: true,
    
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    breakpoints: {
        992: {
          spaceBetween: 80,
        },
    },
});


const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}





var images = [
    "assets/img/inve (7).jpg",
    "https://media.discordapp.net/attachments/971434457074642947/1103006624857202708/0-02-05-9699ef67fae98ec0c9cc778e7b0a5b8b33830bafac7a8411b1436160bf41f869_b4ecffe3b81889fa.jpg?width=1128&height=846",
    "https://media.discordapp.net/attachments/971434457074642947/1103006593139871794/0-02-05-373c490c0732351ab7c9f2689997dd0b27b5d1ec4293d4a2cd3aa3c402083d90_382345f940b23dce.jpg?width=1127&height=846",
    "https://media.discordapp.net/attachments/971434457074642947/1103006637289111592/0-02-05-2a75384bff9cc3696b1189ca6fc5991d3078b866779266e031382278fc73549b_134d8a0c9417391b.jpg?width=1128&height=846",
    "https://media.discordapp.net/attachments/971434457074642947/1103006672533864588/0-02-05-6e0b9fdba642fe893499c47dbb1465e1fc25f8d39c9fdf821c5e79343cebd926_bdb7a91a59a08c60.jpg?width=1128&height=846",
    
];
var i=0;
function slides() {
document.getElementById("slideimage").src = images[i];
if(i<(images.length-1))
i++;
else
i=0;
}


setInterval(slides, 2000)
var images2 = [
    "assets/img/inve (6).jpg",
    "https://media.discordapp.net/attachments/971434457074642947/1103006707451449424/0-02-05-d3afb82d24205e3179c489d37e3ee343f6beba8575a6cc55e04529725d421da6_5db9aa2bfcbc2986.jpg?width=1128&height=846",
    "https://media.discordapp.net/attachments/971434457074642947/1103006718373396581/0-02-05-2fa88e6bc9cabf6de9ff0eb8dd523d9896cc06a44a4dc8df5a0e0f56fc5f0328_29b668df7cb93b7f.jpg?width=635&height=846",
    "https://media.discordapp.net/attachments/971434457074642947/1103006721888223302/0-02-05-d7760236f0fccb0eace2700dfa46b7cbbe4465b1963234cae58162b8c06493d7_9fe25df544e283f2.jpg?width=1127&height=846",
    "https://media.discordapp.net/attachments/971434457074642947/1103006730817900615/0-02-05-b588d471f571ebd5d7fe7adc503db3e573d4bcdffd2f78c36aac7473081ce5a5_430c678a9590ac7e.jpg?width=1127&height=846",
    
];
var i=0;
function slides2() {
document.getElementById("slideimage2").src = images2[i];
if(i<(images2.length-1))
i++;
else
i=0;
}
setInterval(slides2, 2000)