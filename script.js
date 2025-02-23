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

// ฟังก์ชันเปิดของขวัญและแสดงคำอวยพร
function openGift() {
    document.getElementById("message").style.display = "block";
}

// เริ่มเพิ่มลูกโป่งเมื่อโหลดหน้าเว็บ
window.onload = function () {
    addBalloon();
};
