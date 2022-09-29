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
let sentences = ['mahmoud khaled.', 'a photographer.', 'a web designer.', 'A graphic designer.', 'a web developer.'];
let secands = 2500;
mainHeading.innerHTML = 'i am ';
for (let j = 0; j < sentences.length; j++) {
  setTimeout(() => {
    i = 0;
    writingSent([j]);
    clearword();
  }, secands * 2 * ([j]));

  for (let v = 0; v < 1; v++) {
    setInterval(() => {
      setTimeout(() => {
        i = 0;
        writingSent(([j]));
        clearword();
      }, secands * 2 * ([j]));
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
function clearword() {
  setTimeout(() => {
    clearwords = setInterval(() => {
      prlength = mainHeading.innerHTML.length;
      mainHeading.innerHTML = mainHeading.innerHTML.slice(0, prlength - 1);
      if (prlength === 6) {
        clearInterval(clearwords);
      };
    }, 40);
  }, secands + 1500);
}
// = the end of change heading =
//////////////////////////////////////////
// = make the placeholder sticky at up 
let inputs = document.querySelectorAll('.inpt');

inputs.forEach((inpt) => {

  inpt.addEventListener('focus', (e) => {
    place = document.querySelector(`.${e.target.className.split(' ').join('.')} + span`);
    e.target.parentElement.classList.add('active');
    place.classList.add('active');
  });

  inpt.addEventListener('blur', (e) => {

    if (e.target.value === "") {
      document.querySelector(`.${e.target.className.split(' ').join('.')} + span`).classList.remove('active');
      e.target.parentElement.classList.remove('active')
    }
  });
});

// = end make the placeholder sticky =
//////////////////////////////////////////
// = start add active according to page=
let landingsec = document.querySelector('.landing');
let aboutsec = document.querySelector('.about');
let sevrsec = document.querySelector('.services');
let worksec = document.querySelector('.work');
let statssec = document.querySelector('.stats');
let blogsec = document.querySelector('.blog');
window.addEventListener('scroll', () => {
  let scrolled = this.scrollY;
  let windowHeight = this.innerHeight;
  // landing
  let landHei = landingsec.offsetHeight;
  // about
  let abouHei = aboutsec.offsetHeight;
  // services
  let servHei = sevrsec.offsetHeight;
  // work
  let workHei = worksec.offsetHeight;
  // stats
  let statHei = statssec.offsetHeight;
  // // blog
  let blogHei = blogsec.offsetHeight;
  // console.log(landHei + +abouHei, scrolled)
  links.forEach((link) => {
    if (Math.ceil(scrolled) <= landHei) {
      link.classList.remove('active');
      if (link.dataset.class === 'home') {
        link.classList.add('active')
      }
    }
    addremoveActive(link, scrolled, 'about', landHei)
    addremoveActive(link, scrolled, 'services', landHei, abouHei)
    addremoveActive(link, scrolled, 'work', landHei, abouHei, servHei)
    addremoveActive(link, scrolled, 'stats', landHei, abouHei, servHei, workHei)
    addremoveActive(link, scrolled, 'blog', landHei, abouHei, servHei, workHei, statHei)
    addremoveActive(link, scrolled, 'contact-us', landHei, abouHei, servHei, workHei, statHei, blogHei)
  });
});

function addremoveActive(link, scrolled, place, ...heights) {
  if (Math.ceil(scrolled) > heights.reduce((acc, curr) => acc + curr) - 5) {
    link.classList.remove('active');
    if (link.dataset.class === `.${place}`) {
      link.classList.add('active')
    }
  }
}

// end add active according to page
// create button that get you top
let upButton = document.createElement('button');
upButton.className = 'up-button';
let icon = document.createElement('i');
icon.className = 'fas fa-angle-up';
upButton.append(icon);
document.body.append(upButton);
upButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
});
window.addEventListener('scroll', () => {
  let windowScrolled = this.scrollY;
  if (windowScrolled >= 2000) {
    upButton.classList.add('active')
  } else {
    upButton.classList.remove('active')
  }
});

// = end on scroll change links active =
//////////////////////////////////////////
// = start battery 
let chargeAmount = document.querySelector('.battery-box .charge-amount');
let percent = document.querySelector('.battery-box .percent');
navigator.getBattery().then(function(charge) {
  chargeAmount.style.width = `${charge.level * 100}%`;
  percent.innerHTML = `${Math.ceil(charge.level * 100)}%`
});

window.addEventListener('scroll', () => {
  navigator.getBattery().then(function(charge) {
    chargeAmount.style.width = `${charge.level * 100}%`;
    percent.innerHTML = `${Math.ceil(charge.level * 100)}%`
  });
});
// = end battery 
//////////////////////////////////////////
// = start animation on progress

let stats = document.querySelector('.stats');
let boxes = document.querySelectorAll('.stats .box');
window.addEventListener('scroll', () => {
  let scrolled = this.scrollY;
  let windowHeight = this.innerHeight;
  let statsHeight = stats.offsetHeight;
  let statsTop = stats.offsetTop;

  if (scrolled > statsTop - windowHeight + statsHeight) {

    boxes.forEach((box) => {
      box.querySelector('.progress-box span').style.width = box.querySelector('.progress-box span').dataset.score;
    });

  };

});

// = end animation on progress
//////////////////////////////////////////
// = start share website 
let share = document.querySelector('.share-icon');
share.addEventListener('click', () => {
  let copyText = window.location.href;
  let area = document.createElement('textarea');
  document.body.appendChild(area);
  area.value = copyText;
  area.select();
  document.execCommand('copy');
  document.body.removeChild(area);
  share.classList.add('display');

  setTimeout(() => {
    share.classList.add('active');
  }, 10);
  setTimeout(() => {
    share.classList.remove('active');
    setTimeout(() => {
      share.classList.remove('display');
    }, 100);
  }, 1000)
});
