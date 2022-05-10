const teacherBox = document.querySelector(".teachers__content");
const teacherWrapper = teacherBox.querySelector(".teachers__box");


teacherBox.addEventListener("click",(e)=>{
    if(e.target.tagName == "LABEL"){
        const num = e.target.getAttribute("for");
        const width = ((teacherBox.querySelector(".teachers__box-item").clientWidth)+20)*num;
        teacherWrapper.style.transform = `translateX(-${width}px)`;         
    }
})
