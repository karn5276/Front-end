"use strict";
const main_container = document.getElementById("main_container");
const pre_btn = document.getElementById("btn1");
const next_btn = document.getElementById("btn2");
const quastion_div = document.getElementById("container1");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
const container2 = document.getElementById("container2");
const total = document.getElementById("total");
const options = document.querySelectorAll(".options");
const count = document.getElementById("count");
let value = 0;
let right = 0;
let right2 = 0;
let right3 = 0;
let right4 = 0;
let right5 = 0;

options.forEach((option) => {
    option.addEventListener("click", (event) => {
        removeActive();
        event.target.classList.add("active");
    });
});
function removeActive() {
    options.forEach((option) => {
        option.classList.remove("active");
    })
}
