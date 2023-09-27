const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
  if (menu.classList.contains('slide')) {
    
    menu.classList.remove('slide');
  } else {
   
    menu.classList.add('slide');
  }
});

// hero section
let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("slide1");
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slideIndex++;
  
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  slides[slideIndex - 1].style.display = "block";
  
  setTimeout(showSlides, 7000); // Change slide every 7 seconds
}



function nextSlide() {
  slideIndex += 1;
  showSlides();
}


//hero-contain animation
let words = document.querySelectorAll(".word");

const animate1 = (word) =>{
        word.classList.add("animate");
    }

const animateAll = (animate) =>{
    setTimeout(function(){
        animate1(words[0]);
        setTimeout(()=>{
            animate1(words[1])
            setTimeout(()=>{
                animate1(words[2])
                setTimeout(()=>{
                  animate1(words[3])
                  setTimeout(()=>{
                    animate1(words[4])
                },1000); 
              },1000); 
            },1000);  
        },1000);
    },100);

    
}
animateAll(animate1)




let divs = document.querySelectorAll('.number-div');  

let counters = [0, 0, 0, 0]; 
let targets = [70, 90, 20, 50]; 
let intervals = []; 

for (let i = 0; i < divs.length; i++) {
  intervals[i] = setInterval(() => {
    if (counters[i] === targets[i]) {
      clearInterval(intervals[i]);
    } else {
      counters[i] += 1;
      if (i === 2) {
        divs[i].innerHTML = counters[i] + "%"; 
      } else {
        divs[i].innerHTML = counters[i] +"%";
      }
    }
  }, 400 * (i + 1)); 
}

// /////////////////////////////////////


