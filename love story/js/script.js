let currentPage = 0;
const startBtn = document.getElementById("startBtn");
const photoBox = document.getElementById("photoBox");
const photo = document.querySelector("#photoBox img");

let photos = [
    "images/photo/photo1.jpg",
    "images/photo/photo2.jpg",
    "images/photo/photo3.jpg",
    "images/photo/photo4.jpg",
    "images/photo/photo5.jpg",

];

let index = 0;

startBtn.addEventListener("click", function(){const music = document.getElementById("music");
music.play();

    document.querySelector("h1").innerHTML = "❤️ Anh yêu em ❤️";

    document.querySelector("p").innerHTML = "Mỗi tấm ảnh là mỗi trạng thái ❤️";

    startBtn.style.display = "none";const fireworks = document.getElementById("fireworks");

for(let i = 0; i < 5; i++){

    setTimeout(function(){

        const boom = document.createElement("div");

        boom.className = "firework";

        boom.style.left = Math.random() * 100 + "%";
        boom.style.top = (20 + Math.random() * 50) + "%";

        fireworks.appendChild(boom);

        setTimeout(function(){
            boom.remove();
        },1200);

    }, i * 250);

}

    photoBox.style.display = "block";

    setInterval(function(){

        index++;

        if(index >= photos.length){
            index = 0;
        }

        photo.style.opacity = "0";

setTimeout(function(){

    photo.src = photos[index];

    photo.style.opacity = "1";

},300);

    },2000);

});const hearts = document.getElementById("hearts");

setInterval(function(){

    for(let i = 0; i < 3; i++){

        const heart = document.createElement("div");

        heart.className = "heart";

        const icons = [
    "💖",

    "🌷"
];

heart.innerHTML = icons[Math.floor(Math.random() * icons.length)];

        heart.style.left = Math.random() * 100 + "%";
heart.style.fontSize = (20 + Math.random() * 25) + "px";
heart.style.transform = `rotate(${Math.random()*360}deg)`;
        heart.style.animationDuration = 5 + Math.random() * 10 + "s";

        hearts.appendChild(heart);

        setTimeout(function(){
            heart.remove();
        },7000);

    }

},100);
const menuTrigger = document.getElementById("menuTrigger");
const menuOptions = document.getElementById("menuOptions");

menuTrigger.addEventListener("click", function () {

    menuOptions.classList.toggle("show");

});
const musicBtn = document.getElementById("musicBtn");
const music = document.getElementById("music");

musicBtn.addEventListener("click", function () {

    if (music.paused) {

        music.play();

        musicBtn.innerHTML = "🎵";

    } else {

        music.pause();

        musicBtn.innerHTML = "🔇";

    }

});
document.addEventListener("click", function (e) {

    if (e.target.id === "menuTrigger") return;

    currentPage++;

    console.log("Page:", currentPage);

});
const flowers = document.getElementById("flowers");

setInterval(function(){

    const flower = document.createElement("div");

    flower.className = "flower";

    flower.style.left = Math.random() * window.innerWidth + "px";

    flower.style.animationDuration = (6 + Math.random() * 4) + "s";

    flower.style.width = (20 + Math.random() * 25) + "px";
    flower.style.height = flower.style.width;

    flowers.appendChild(flower);

    setTimeout(function(){
        flower.remove();
    },10000);

},300);
const messageBtn = document.getElementById("messageBtn");
const letterBox = document.getElementById("letterBox");
const closeLetter = document.getElementById("closeLetter");

messageBtn.addEventListener("click", function () {
   envelopeBox.style.display = "flex";
});

closeLetter.addEventListener("click", function () {
    letterBox.style.display = "none";
});
const giftBtn = document.getElementById("giftBtn");
const galleryBox = document.getElementById("galleryBox");
const galleryImage = document.getElementById("galleryImage");

const closeGallery = document.getElementById("closeGallery");
const prevPhoto = document.getElementById("prevPhoto");
const nextPhoto = document.getElementById("nextPhoto");

let galleryIndex = 0;

giftBtn.addEventListener("click", function(){

    galleryBox.style.display = "flex";

    galleryImage.src = photos[galleryIndex];

});

closeGallery.addEventListener("click", function(){

    galleryBox.style.display = "none";

});

nextPhoto.addEventListener("click", function(){

    galleryIndex++;

    if(galleryIndex >= photos.length){
        galleryIndex = 0;
    }

    galleryImage.src = photos[galleryIndex];

});

prevPhoto.addEventListener("click", function(){

    galleryIndex--;

    if(galleryIndex < 0){
        galleryIndex = photos.length - 1;
    }

    galleryImage.src = photos[galleryIndex];

});
const loadingScreen = document.getElementById("loadingScreen");
const loadingProgress = document.getElementById("loadingProgress");

let percent = 0;

const loading = setInterval(function(){

    percent++;

    loadingProgress.style.width = percent + "%";

    if(percent >= 100){

        clearInterval(loading);

        loadingScreen.style.opacity = "0";

        setTimeout(function(){

            loadingScreen.style.display = "none";

        },1000);

    }

},25);
const words = document.getElementById("words");

const messages = [
"❤️ Anh nhắc em",
"🥰 Em thì tuyệt rồi",
"💌 Nói gì bây giờ",
"😘 Nhớ em nhiều",
"💖 Love You",
"💝 Em cười là anh vui",
"🐻 Ôm em một cái",
"✨ Anh sẽ luôn ở đây",
"🌹 Chúng mình hạnh phúc nhé",
"🫶 Mãi là của nhau"
];

setInterval(function(){

    const box = document.createElement("div");

    box.className = "wordBox";

    box.innerHTML = messages[Math.floor(Math.random() * messages.length)];

    box.style.left = Math.random() * (window.innerWidth - 250) + "px";

    box.style.animationDuration = (8 + Math.random() * 4) + "s";

    words.appendChild(box);

    setTimeout(function(){
        box.remove();
    },12000);

},1800);
const sparkles = document.getElementById("sparkles");

setInterval(function(){

    const sparkle = document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.style.left = Math.random() * window.innerWidth + "px";
sparkle.style.setProperty("--x", (Math.random() * 500 - 250) + "px");
sparkle.style.setProperty("--rotate", (Math.random() * 12 - 6) + "deg");
    sparkle.style.animationDuration = (8 + Math.random() * 4) + "s";

    const size = 3 + Math.random() * 5;

    sparkle.style.width = size + "px";
    sparkle.style.height = size + "px";

    sparkles.appendChild(sparkle);

    setTimeout(function(){
        sparkle.remove();
    },12000);

},180);
messageBtn.addEventListener("click", function () {
    letterBox.style.display = "flex";
});
closeLetter.addEventListener("click", function () {
    letterBox.style.display = "none";
});
const cursorHeart = document.getElementById("cursorHeart");

document.addEventListener("mousemove", function(e){

    cursorHeart.style.left = e.clientX + "px";
    cursorHeart.style.top = e.clientY + "px";

});