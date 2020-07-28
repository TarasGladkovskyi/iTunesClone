import {radioPlayerInit} from "./radioPlayer.js"
import {musicPlayerInit} from "./musicPlayer.js"
import {videoPlayerInit} from "./videoPlayer.js"

const playerBtn = document.querySelectorAll(".player-btn")
const playerBlock = document.querySelectorAll(".player-block")
const temp = document.querySelector(".temp")


const deactivationPlayer = ()=> {
    temp.style.display = "none";
    playerBtn.forEach(btn => btn.classList.remove("active"))
    playerBlock.forEach((btn) => btn.classList.remove("active"))
}

playerBtn.forEach((btn, i) => btn.addEventListener('click', e => {
    deactivationPlayer();
    btn.classList.add("active")
    playerBlock[i].classList.add("active")
  }))



radioPlayerInit()
musicPlayerInit()
videoPlayerInit()