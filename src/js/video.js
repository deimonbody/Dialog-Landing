const videoWrapper = document.querySelector(".greeting__video")
const videoContent = "<iframe  src='https://www.youtube.com/embed/PtgK89ivoZY' title='YouTube video player' frameborder='0' allow='accelerometer'; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture allowfullscreen></iframe>"

videoWrapper.addEventListener("click",function(e){
    if(e.target.classList.contains("fa-play-circle")){
        this.innerHTML = videoContent;
        this.style.backgrounImage = "";
        const video = this.querySelector("iframe")
        video.style.width = "100%";
        video.style.height = "100%"
    }
})
