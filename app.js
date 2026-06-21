const whatsappNumber = "9319078944";

function enquiry(productName){

const message =
`Hello Auranice,

I am interested in:

${productName}

Please share details and pricing.

Thank You.`;

window.open(
`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
'_blank'
);

}

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

setInterval(() => {

slides[currentSlide].classList.remove("active");

currentSlide++;

if(currentSlide >= slides.length){
currentSlide = 0;
}

slides[currentSlide].classList.add("active");

},3000);
