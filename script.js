const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const result = document.getElementById("result");

noButton.addEventListener("mouseover", () => {

    const maxX = window.innerWidth - noButton.offsetWidth - 30;
    const maxY = window.innerHeight - noButton.offsetHeight - 30;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noButton.style.position = "fixed";
    noButton.style.left = x + "px";
    noButton.style.top = y + "px";
});

yesButton.addEventListener("click", () => {

    document.querySelector(".photo").style.display = "none";
    document.querySelector("h1").style.display = "none";
    document.querySelector(".buttons").style.display = "none";

    result.style.display = "block";
});