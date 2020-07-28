export const videoPlayerInit = () => {
  const videoPlayer = document.querySelector(".video-player")
  const videoButtonPlay = document.querySelector(".video-button__play")
  const videoButtonStop = document.querySelector(".video-button__stop")
  const videoTimePassed = document.querySelector(".video-time__passed")
  const videoTimeTotal = document.querySelector(".video-time__total")
  const videoProgress = document.querySelector(".video-progress")

  const toggleIcon = () => {
    if (videoPlayer.paused){
      videoButtonPlay.classList.remove("fa-pause")
      videoButtonPlay.classList.add("fa-play")
    } else {
      videoButtonPlay.classList.remove("fa-play")
      videoButtonPlay.classList.add("fa-pause")
    }
  }

  const togglePlay = () => {
    if (videoPlayer.paused){
      videoPlayer.play()
    } else {
      videoPlayer.pause()
    }

    // toggleIcon()
  }

  const stopPlay = () => {
    videoPlayer.pause()
    videoPlayer.currentTime = 0
  }

  const addZero = (n) => n < 10 ? "0" + n : n  

  videoPlayer.addEventListener('click', togglePlay)
  videoButtonPlay.addEventListener('click', togglePlay)

  videoPlayer.addEventListener('play', toggleIcon)
  videoPlayer.addEventListener('pause', toggleIcon)

  videoButtonStop.addEventListener('click', stopPlay)

  videoPlayer.addEventListener('timeupdate', () => {
    const currentTime = videoPlayer.currentTime
    const duration = videoPlayer.duration

    let minutePassed = Math.floor(currentTime / 60)
    let secondsPassed = Math.floor(currentTime % 60)

    let miteTotal = Math.floor(duration / 60)
    let secondsTotal = Math.floor(duration % 60)

    videoTimePassed.textContent = `${addZero(minutePassed)}:${addZero(secondsPassed)}`
    videoTimeTotal.textContent = `${addZero(miteTotal)}:${addZero(secondsTotal)}`

    videoProgress.value = (currentTime / duration) * 100
  })

  videoProgress.addEventListener('change', () => {
    const duration = videoPlayer.duration
    const value = videoProgress.value

    videoPlayer.currentTime = (value * duration) / 100
  })
}  