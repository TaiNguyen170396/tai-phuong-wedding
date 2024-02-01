var link = $("nav ul li a");
//click handler
link.on("click" , function(){
  var $this = $(this);
  link.removeClass("active");
  $this.addClass("active");
  })

//Navbar hide on scroll
var prevScrollpos = window.pageXOffset;
// var prevScrollpos = document.documentElement.scrollTop;
window.onscroll = function() {
var currentScrollPos =window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector('.top-nav-bar').style.top = "0";
  } else {
    document.querySelector('.top-nav-bar').style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}

  
const imageLibrary = [
  
  'Anh_bia_3.jpg',
  // 'Anh_bia_3.jpg',
  'Anh_bia_4.jpg',
  'Anh_bia_2.jpg'
];

let currentImageIndex = 0;

function changeBackgroundImage() {
  const imageLibraryElement = document.querySelector('.parallax-image2');
  imageLibraryElement.style.backgroundImage = `url(${imageLibrary[currentImageIndex]})`;
  currentImageIndex = (currentImageIndex + 1) % imageLibrary.length;
}

setInterval(changeBackgroundImage, 5000); // Change the image every 5 seconds

const textLibrary = [
  'We Decice To Live Happily Together',
  'A Decade Of Love',
  'The Wedding Celebration Of'
];

let currentTextIndex = 0; 
const textContainer = document.querySelector('.open_text_container_1');
const textElements = document.getElementById("text_1");

function changeText() {
  textElements.textContent = textLibrary[currentTextIndex];
  textContainer.style.animation = 'none';
  setTimeout(() => {
    textContainer.style.animation = 'opentext1 1s forwards';
  }, 10);
  currentTextIndex = (currentTextIndex + 1) % textLibrary.length;
  
}

setInterval(changeText, 5000);

const textLibrary_2 = [
  'She said Yes',
  "We're married",
  'Phuong & Tai'
];

let currentTextIndex_2 = 0;
const textContainer_2 = document.querySelector('.open_text_container_2');
const textElements_2 = document.getElementById("text_2");


function changeText_2() {
  textElements_2.textContent = textLibrary_2[currentTextIndex_2];
  textContainer_2.style.animation = 'none';
  setTimeout(() => {
    textContainer_2.style.animation = 'opentext2 4s forwards';
  }, 10);
  currentTextIndex_2 = (currentTextIndex_2 + 1) % textLibrary_2.length;
  
}

setInterval(changeText_2, 5000);


let menu = document.querySelector('#menu-icon');
let topnav = document.querySelector('.topnav');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  topnav.classList.toggle('open')
}

topnav.onclick = () =>{
  topnav.classList.toggle('open');
  menu.classList.toggle('bx-x');
}

// JS Our story

let items = document.querySelectorAll('.story-slider .story-item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

//config param
let countItem = items.length;
let itemActive = 0;
//event next click
next.onclick = function(){
  itemActive = itemActive + 1;
  if(itemActive >= countItem){
    itemActive = 0;
  }
  showSlider();
}
//event prev click
prev.onclick = function(){
  itemActive = itemActive - 1;
  if(itemActive < 0 ){
    itemActive = countItem - 1;
  }
  showSlider();
}
//auto run slider
let refreshInterval = setInterval(() => {
  next.click();
}, 3000)
function showSlider(){
  //remove item old active item
  let itemActiveOld = document.querySelector('.story-slider .story-list .story-item.active');
  let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
  itemActiveOld.classList.remove('active');
  thumbnailActiveOld.classList.remove('active');

  //active new item
  items[itemActive].classList.add('active');
  thumbnails[itemActive].classList.add('active');

  //clear auto time run slider
  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => {
    next.click();
  }, 3000)
}

//click thumbnail
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", ()=>{
    itemActive = index;
    showSlider();
  }
  )
})

//invitation fade in on scrolling

// function reveal() {
//   var reveals = document.querySelectorAll(".reveal");

//   for (var i = 0; i < reveals.length; i++) {
//     var windowHeight = window.innerHeight;
//     var elementTop = reveals[i].getBoundingClientRect().top;
//     var elementVisible = 300;

//     if (elementTop < windowHeight - elementVisible) {
//       reveals[i].classList.add("active");
//     } else {
//       reveals[i].classList.remove("active");
//     }
//   }
// }

// window.addEventListener("scroll", reveal);
let sections = document.querySelector('.column4')

// window.addEventListener(
//   "scroll",
//   () => {
//     document.querySelector('.invitation-page').style.setProperty(
//       "--scroll",
//       window.pageYOffset / (document.querySelector('.invitation-page').offsetHeight - window.innerHeight)
//     );
//   },
//   false
// );


// window.onscroll = () => {
//   sections.forEach(sec => {
//     let top = window.scrollY;
//     let offset = sec.offsetTop;
//     let height = sec.offsetHeight;

    // if (top >= offset && top < offset + height){
    //   sec.classList.add('show');
    // }

//     else{
//       sec.classList.remove('show');
//     }
//   })
// }

const invitation4 = document.querySelector('.column4');
window.addEventListener('scroll',checkBoxes4);
checkBoxes4();
function checkBoxes4() {
  // const triggerBottom = window.innerHeight / 5 * 4;
  // invitations.forEach(invitation)
  let top = window.scrollY;
  let offset = invitation4.offsetTop;
  let height = invitation4.offsetHeight;
  if (top >= document.getElementById("home").offsetHeight/3 && top < offset + height/0.5){
    invitation4.classList.add('show');
  }
    else{
      invitation4.classList.remove('show');
    }
}

const invitation3 = document.querySelector('.column3');
window.addEventListener('scroll',checkBoxes3);
checkBoxes3();
function checkBoxes3() {
  // const triggerBottom = window.innerHeight / 5 * 4;
  // invitations.forEach(invitation)
  let top = window.scrollY;
  let offset = invitation3.offsetTop;
  let height = invitation3.offsetHeight;
  if (top >= document.getElementById("home").offsetHeight/3 && top < offset + height/0.5){
    invitation3.classList.add('show');
  }
    else{
      invitation3.classList.remove('show');
    }
}

const invitation2 = document.querySelector('.column2');
window.addEventListener('scroll',checkBoxes2);
checkBoxes2();
function checkBoxes2() {
  // const triggerBottom = window.innerHeight / 5 * 4;
  // invitations.forEach(invitation)
  let top = window.scrollY;
  let offset = invitation2.offsetTop;
  let height = invitation2.offsetHeight;
  if (top >= document.getElementById("home").offsetHeight/3 && top < offset + height/0.5){
    invitation2.classList.add('show');
  }
    else{
      invitation2.classList.remove('show');
    }
}

const invitation6 = document.querySelector('.invitation-page');
window.addEventListener('scroll',checkBoxes);
checkBoxes();
function checkBoxes() {
  // const triggerBottom = window.innerHeight / 5 * 4;
  // invitations.forEach(invitation)
  let top = window.scrollY;
  let offset = invitation6.offsetTop;
  let height = invitation6.offsetHeight;
  if (top >= document.getElementById("home").offsetHeight/3 && top < offset + height/1.1){
    invitation6.classList.add('show');
  }
    else{
      invitation6.classList.remove('show');
    }
}

const invitation0 = document.querySelectorAll('.invitation');
window.addEventListener('scroll',check);
check();
function check() {
  invitation0.forEach(invitation => {
    let top = window.scrollY;
    let offset = invitation6.offsetTop;
    let height = invitation6.offsetHeight;
    if (top >= document.getElementById("home").offsetHeight/3 && top < offset + height/0.5){
      invitation.classList.add('show');
    }
      else{
        invitation.classList.remove('show');
    }
  })
}

//Registry

let copyText1 = document.getElementById("copy-icon-1")
copyText1.onclick=function(){
  const input1 = document.querySelector('.account-qr-VCB-groom').innerHTML;
  navigator.clipboard.writeText(input1);
  copyText1.classList.add('active');
  setTimeout(function(){
    copyText1.classList.remove('active')}, 1000);
}

let copyText2 = document.getElementById("copy-icon-2")
copyText2.addEventListener("click",function(){
  const input2 = document.querySelector('.account-qr-Momo-groom').innerHTML;
  navigator.clipboard.writeText(input2);
  copyText2.classList.add("active");
  setTimeout(function(){
    copyText2.classList.remove('active')}, 1000);
})

let copyText3 = document.getElementById("copy-icon-3")
copyText3.addEventListener("click",function(){
  const input3 = document.querySelector('.account-qr-VCB-bride').innerHTML;
  navigator.clipboard.writeText(input3);
  copyText3.classList.add("active");
  setTimeout(function(){
    copyText3.classList.remove('active')}, 1000);
})

let copyText4 = document.getElementById("copy-icon-4")
copyText4.addEventListener("click",function(){
  const input4 = document.querySelector('.account-qr-Momo-bride').innerHTML;
  navigator.clipboard.writeText(input4);
  copyText4.classList.add("active");
  setTimeout(function(){
    copyText4.classList.remove('active')}, 1000);
})

var gift = document.querySelector(".gift-logo");
var accountpopup = document.querySelector(".bank-account-popup");
gift.onclick = function(){
  accountpopup.style.visibility = "visible";
}

var close = document.getElementById("close-icon");
close.onclick = function(){
  accountpopup.style.visibility = "hidden";
}