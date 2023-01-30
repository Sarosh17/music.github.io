window.addEventListener("load", () =>{


    const sounds=document.querySelectorAll(".sound")
const pads=document.querySelectorAll(".pads div")
const visual=document.querySelector(".visual")
const colors=[
    " #636363",
" #656565",
 "#646464",
"#757575",
"#535353",
 "#959595",

]


//sound
pads.forEach((pad, index) => {
    pad.addEventListener("click",function(){
        sounds[index].currentTime=0;
        sounds[index].play()

        createBubbles(index)

    }) 
})

//create a function that makes bubbles
const createBubbles=(index)=>{
    const bubble=document.createElement("div")
    visual.appendChild(bubble)
    bubble.style.backgroundColor=colors[index]
    bubble.style.animation="jump is ease"
    bubble.addEventListener('animationend',function(){
        visual.removeChild(this);
    })
}
})