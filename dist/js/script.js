const header = document.querySelector(".header");
const clickElem = header.querySelector(".header__hamburger-block");
clickElem.addEventListener("click",function(){
    this.classList.toggle("hamb-active")
    const wrapper = header.querySelector(".header__hamburger-box");
    const content = wrapper.querySelector(".hamburger-box__content");
    if(+((wrapper.style.height)[0]) > 0){ //if open --> close it
        wrapper.style.height = 0+"px";
        document.body.style.overflow = '';
    } 
    else{ //if closed -->open it
        wrapper.style.height = content.clientHeight+"px";
        document.body.style.overflow = 'hidden';
    }
})

;
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
;
const lvls_box = document.querySelector(".courses__levels");
const cursBlock = document.querySelector(".courses__course-block");

const cursSlider = cursBlock.querySelector(".courses__course-wrapper");

const leftButton = cursBlock.querySelector(".courses__slider-btn__left");
const rightButton = cursBlock.querySelector(".courses__slider-btn__right");

const countsOfSlides = cursBlock.querySelectorAll(".courses__course-item").length-1;
let iterator_for_slider = 0;


lvls_box.addEventListener("click",(e)=>{
    const _t =e.target; 
    if(_t.classList.contains("courses__levels-item")){
        iterator_for_slider = +(_t.dataset.slideIndex);
        removeAllShowEffectAndAdd(_t);
        changeSlide();
    }
})

function removeAllShowEffectAndAdd(el){
    const listOfLvls = lvls_box.querySelectorAll(".courses__levels-item");
    for(let elem of listOfLvls){
        elem.classList.remove("courses__levels-item-shown");
    }
    el.classList.add("courses__levels-item-shown");
}


leftButton.addEventListener("click",function(){
    changeSlide("before",this);
    
    if(iterator_for_slider <= 0){
        const currentLvl = lvls_box.querySelector(`.courses__levels-item[data-slide-index="${0}"]`);
        removeAllShowEffectAndAdd(currentLvl);
        this.classList.add("courses__slider-btn--blocked");
        
        return;
    }else{
        const currentLvl = lvls_box.querySelector(`.courses__levels-item[data-slide-index="${iterator_for_slider}"]`);
        removeAllShowEffectAndAdd(currentLvl);
    }
   
        
})
rightButton.addEventListener("click",function(){
    changeSlide("next",this);
    if(iterator_for_slider >= countsOfSlides){
        this.classList.add("courses__slider-btn--blocked");
        const currentLvl = lvls_box.querySelector(`.courses__levels-item[data-slide-index="${iterator_for_slider}"]`);
        removeAllShowEffectAndAdd(currentLvl);
        return;
    }else{
        const currentLvl = lvls_box.querySelector(`.courses__levels-item[data-slide-index="${iterator_for_slider}"]`);
    removeAllShowEffectAndAdd(currentLvl);
    }
    
})

function changeSlide(direction=null){
    const cursItem = cursBlock.querySelector(".courses__course-item");
    const margin = parseInt(window.getComputedStyle(cursItem).marginRight);
    const width = cursItem.clientWidth+margin;

    if(direction == "before"){
        iterator_for_slider-=1;
        rightButton.classList.remove("courses__slider-btn--blocked")
        cursSlider.style.transform = `translateX(-${width*iterator_for_slider}px)`;
    }
    if(direction == "next"){
        iterator_for_slider+=1;
        leftButton.classList.remove("courses__slider-btn--blocked");
        cursSlider.style.transform = `translateX(-${width*iterator_for_slider}px)`;
    }
    
    if(direction == null){
        changeCourseLvl();
        cursSlider.style.transform = `translateX(-${width*iterator_for_slider}px)`;
    }
}

function changeCourseLvl(){
    rightButton.classList.remove("courses__slider-btn--blocked");
    leftButton.classList.remove("courses__slider-btn--blocked");
    
    if(iterator_for_slider <= 0){
        leftButton.classList.add("courses__slider-btn--blocked");
        return;
    }
    if(iterator_for_slider >= countsOfSlides){
        rightButton.classList.add("courses__slider-btn--blocked");
        return;
    }
}
;
const teacherBox = document.querySelector(".teachers__content");
const teacherWrapper = teacherBox.querySelector(".teachers__box");


teacherBox.addEventListener("click",(e)=>{
    if(e.target.tagName == "LABEL"){
        const num = e.target.getAttribute("for");
        const width = ((teacherBox.querySelector(".teachers__box-item").clientWidth)+20)*num;
        teacherWrapper.style.transform = `translateX(-${width}px)`;         
    }
})
;
const elements = document.querySelectorAll(".btn-popup-js");
const popup = document.querySelector(".popup")
const bg = document.querySelector(".background-popup ");

const closeEl = document.querySelector(".popup__close-block");


for(let el of elements){
    el.addEventListener("click",(e)=>{
        e.preventDefault()
        popup.classList.add("popup-active");
        document.body.classList.add("body--popup-active");
        bg.classList.add("bg-popup-active")
    });
    
}

closeEl.addEventListener("click",()=>{
    popup.classList.remove("popup-active");
    document.body.classList.remove("body--popup-active");
    bg.classList.remove("bg-popup-active")
})


bg.addEventListener("click",()=>{
    popup.classList.remove("popup-active");
    document.body.classList.remove("body--popup-active");
    bg.classList.remove("bg-popup-active")
})

popup.addEventListener("change",function(e){
    let _t = e.target;
    if(e.target.tagName="INPUT"){
        
        if(_t.id == "telephone"){
            const lbl = this.querySelector(`label[for="telephone"]`);
            if(checkValidNum(_t.value)){
                setInfoParam(lbl,true);
            }else{
                setInfoParam(lbl,true);
            }    
        }        


        if(_t.id == "lname_fname"){
            const lbl = this.querySelector(`label[for="lname_fname"]`);
            if(_t.value.length>3){
                setInfoParam(lbl,true)
            }  
            else {
                setInfoParam(lbl,false)
            }
        } 

        if(_t.id == "email"){
            const lbl = this.querySelector(`label[for="email"]`);
            if(checkValidEmail(_t.value)){
                setInfoParam(lbl,true);
            }else{
                setInfoParam(lbl,false);
            }    
        } 
        
    }


})


function setInfoParam(lbl,right){
    if(right){
        lbl.querySelector(".right-info").classList.remove("hidden")
        lbl.querySelector(".wrong-info").classList.add("hidden")
    }else{
        lbl.querySelector(".right-info").classList.add("hidden")
        lbl.querySelector(".wrong-info").classList.remove("hidden")
    }
}
function checkValidNum(val){
    if(val.length !=13) return false;
    
    let regex = /^(\+380)[0-9]{9}$/;
    let isValid = true;
    if(!regex.test(val)) isValid = false;
    return isValid
}

function checkValidEmail(val){
   return /\S+@\S+\.\S+/.test(val);
}

;
