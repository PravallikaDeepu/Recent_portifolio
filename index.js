let phoneNumber = document.getElementById("phoneNumber")
let phoneImage = document.getElementById("phoneImage")
let phonebtn = document.getElementById("phonebtn")


phonebtn.onclick = function(){
      phoneImage.classList.toggle("d-none")
      phoneNumber.classList.toggle("d-none")
}



const spans = document.querySelectorAll('.designation');
spans.forEach((span, index) => {
    span.style.animationDelay = `${index * 2}s`;
    span.classList.add('header-animation');
});