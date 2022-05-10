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

