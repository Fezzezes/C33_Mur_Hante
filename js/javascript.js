
let frames = [];

window.addEventListener("load",()=>{

    for(let i = 1; i<7; i++){

        console.log("frame-"+i+"-evil");
        frames.push(new Frame("frame-"+i+"-evil"));
    }
    tick();
})

const tick = () => {

    for(let i = 0; i<6;i++)
    {
        frames[i].tick();
    }

    window.requestAnimationFrame(tick);
    
}