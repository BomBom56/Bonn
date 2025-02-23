// ฟังก์ชันเล่นเพลง
function playMusic() {
    var audio = document.getElementById("birthdaySong");
    var button = document.querySelector("button");

    if (audio.paused) {
        audio.play();
        button.textContent = "หยุดเพลง";
    } else {
        audio.pause();
        button.textContent = "กดเพื่อฟังเพลง";
    }
}

// สลับรูปภาพอัตโนมัติพร้อมเอฟเฟกต์เฟดเข้าออก
let images = ["photo1.jpg", "photo2.jpg", "photo3.jpg"];
let index = 0;
let photo = document.getElementById("birthdayPhoto");

function changePhoto() {
    photo.style.opacity = 0;

    setTimeout(() => {
        index = (index + 1) % images.length;
        photo.src = images[index];
        photo.style.opacity = 1;
    }, 1000);
}

setInterval(changePhoto, 3000);

// ฟังก์ชันเพิ่มลูกโป่งและเสียงแตกเมื่อคลิก
let balloonContainer = document.querySelector(".balloons");
let maxBalloons = 5;
let balloonCount = 0;

function addBalloon() {
    if (balloonCount < maxBalloons) {
        let balloon = document.createElement("img");
        balloon.src = "balloon.png"; 
        balloon.classList.add("balloon");

        balloon.style.position = "absolute";
        balloon.style.left = Math.random() * 80 + "vw";
        balloon.style.animation = "float 5s infinite ease-in-out";

        balloon.addEventListener("click", playPopSound); // เสียงลูกโป่งแตกเมื่อคลิก

        balloonContainer.appendChild(balloon);
        balloonCount++;

        setTimeout(addBalloon, 1000);
    }
}

// เสียงลูกโป่งแตก
function playPopSound() {
    let popSound = new Audio("pop-sound.mp3");
    popSound.play();
    this.style.display = "none"; // ซ่อนลูกโป่งหลังจากคลิก
}

// ฟังก์ชันโชว์เค้กวันเกิดเมื่อกดปุ่ม
function showCake() {
    document.getElementById("cake").style.display = "block";
}

// เริ่มเพิ่มลูกโป่งและแสดงเค้กเมื่อโหลดหน้าเว็บ
window.onload = function () {
    addBalloon();
    setTimeout(showCake, 5000); // แสดงเค้กหลังจาก 5 วินาที
};