// ======= start toggler menu ======

let toggler = document.querySelector('.toggler');
let navbar = document.querySelector('.navbar');
let container = document.querySelector('.container');

toggler.addEventListener('click', (e) => {
  e.stopPropagation();
  navbar.classList.toggle('active');
});

navbar.addEventListener('click', (e) => {
  e.stopPropagation();
});
document.addEventListener('click', (e) => {
  if (e.target !== navbar) {
    if (navbar.classList.contains('active')) {
      navbar.classList.toggle('active');
    }
  }
})
// ======= end toggler menu =======
//////////////////////////////////////////
// === start add active class in menu ====
//       and scroll to target place
let links = document.querySelectorAll('.navbar .links li a');

links.forEach((link) => {
  
  link.addEventListener('click', (e) => {
    e.stopPropagation();
    links.forEach((li) => {
      li.classList.remove('active');
    })
    e.target.classList.add('active');

    if (e.target.dataset.class === 'home') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
    document.querySelector(e.target.dataset.class).scrollIntoView({
      behavior: 'smooth'
    });

  });

});

let moreAboutMe = document.querySelector('.landing .text a');
moreAboutMe.addEventListener('click', () => {
  document.querySelector(moreAboutMe.dataset.class).scrollIntoView({
    behavior: 'smooth'
  });
});

// === end add active class in menu ====
//////////////////////////////////////////
//= change heading by different sentences =
let mainHeading = document.querySelector('.landing .text h1');
let sentences = ['a photographer.', 'a web designer.', 'A graphic designer.', 'a web developer.', 'mariam wallas.'];
let secands = 2500;
addSentences();

for (let j = 0; j < sentences.length; j++) {
  setTimeout(() => {
    i = 0;
    writingSent([j]);
    addSentences();
  }, secands * 2 * ([j + 1]));

  for (let v = 0; v < 1; v++) {
    setInterval(() => {
      setTimeout(() => {
        i = 0;
        writingSent(([j]));
        addSentences();
      }, secands * 2 * ([j + 1]));
    }, secands * 2 * sentences.length);
  }
}
// writes function
function writingSent(num) {
  writing = setInterval(() => {
    mainHeading.innerHTML += sentences[num][i];
    if (sentences[num].length === mainHeading.innerHTML.length - 5) {
      clearInterval(writing);
    };
    i++;
  }, 100);
}
// adding function
function addSentences() {
  setTimeout(() => {
    clearwords = setInterval(() => {
      prlength = mainHeading.innerHTML.length;
      mainHeading.innerHTML = mainHeading.innerHTML.toString().substr(0, prlength - 1);
      if (prlength === 6) {
        clearInterval(clearwords);
      };
    }, 60);
  }, secands);
}
// = the end of change heading =
//////////////////////////////////////////
// = make the placeholder sticky at up 
let inputs = document.querySelectorAll('.inpt');

inputs.forEach((inpt) => {
  
  inpt.addEventListener('focus', (e) => {
    place = document.querySelector(`.${e.target.className.split(' ').join('.')} + span`);
      place.classList.add('active');
  });
  
  inpt.addEventListener('blur', (e) => {
    
    if (e.target.value === ""){
      document.querySelector(`.${e.target.className.split(' ').join('.')} + span`).classList.remove('active');
    }
  });
});

// = end make the placeholder sticky =
//////////////////////////////////////////
// = start on scroll change links active =
let documentContent = document.querySelectorAll('body > div:not(:first-child)');

window.addEventListener('scroll', () => {
  let windowHeight = this.innerHeight;
  let windowScrolled = this.scrollY;
  
  documentContent.forEach((cont) => {
    let heightAboveCont = cont.offsetTop;
    let contHeight = cont.offsetHeight
  })
  // console.log(windowHeight)
  // console.log(windowScrolled)
});

// = end on scroll change links active =
//////////////////////////////////////////
// = start download cv



// = start download cv

// console.log(toggler) 
