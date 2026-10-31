const openBtn = document.getElementById("openBtn");
const intro = document.getElementById("intro");
const albumPage = document.getElementById("albumPage");
const music = document.getElementById("bgMusic");

const startTime = 66;
const endTime = 108;

openBtn.addEventListener("click", async function () {

    intro.style.display = "none";
    albumPage.style.display = "block";

    document.querySelector(".a3d").style.animationPlayState = "running";

    startCuteRain();

    try {

        music.currentTime = startTime;

        await music.play();

        console.log("Music started successfully");

    } catch (error) {

        console.error("Music error:", error);

    }

});

music.addEventListener("timeupdate", function () {

    if (music.currentTime >= endTime) {

        music.currentTime = startTime;

        music.play();

    }

});

// Cute falling effect on scroll
// Continuous cute falling effect
let cuteRainInterval;

function startCuteRain() {
    if (cuteRainInterval) return;

    const cuteItems = ["🍼", "💗", "⭐", "🍼", "🩵", "✨"];

    cuteRainInterval = setInterval(() => {
        const item = document.createElement("div");

        item.classList.add("falling-item");

        item.innerText =
            cuteItems[Math.floor(Math.random() * cuteItems.length)];

        item.style.left = Math.random() * 100 + "vw";
        item.style.fontSize = Math.random() * 15 + 20 + "px";
        item.style.animationDuration = Math.random() * 3 + 3 + "s";

        document.body.appendChild(item);

        setTimeout(() => {
            item.remove();
        }, 6000);

    }, 350);
}