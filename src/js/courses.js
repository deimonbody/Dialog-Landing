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
