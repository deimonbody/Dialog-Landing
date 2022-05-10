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

