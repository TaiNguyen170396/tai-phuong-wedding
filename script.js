var link = $("nav ul li a");
//click handler
link.on("click" , function(){
  var $this = $(this);
  link.removeClass("active");
  $this.addClass("active");
  })

  
const imageLibrary = [
  'Anh_bia_1.jpg',
  'Anh_bia_2.jpg',
  // 'Anh_bia_3.jpg',
  'Anh_bia_4.jpg'
];

let currentImageIndex = 0;

function changeBackgroundImage() {
  const imageLibraryElement = document.querySelector('.background_1');
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
    textContainer.style.animation = 'opentext1 4s forwards';
  }, 10);
  currentTextIndex = (currentTextIndex + 1) % textLibrary.length;
  
}

setInterval(changeText, 5000);

const textLibrary_2 = [
  'She said Yes',
  "We're married",
  'Tai & Phuong'
];

let currentTextIndex_2 = 0;
const textContainer_2 = document.querySelector('.open_text_container_2');
const textElements_2 = document.getElementById("text_2");


function changeText_2() {
  textElements_2.textContent = textLibrary_2[currentTextIndex_2];
  textContainer_2.style.animation = 'none';
  setTimeout(() => {
    textContainer_2.style.animation = 'opentext2 1s forwards';
  }, 10);
  currentTextIndex_2 = (currentTextIndex_2 + 1) % textLibrary_2.length;
  
}

setInterval(changeText_2, 5000);