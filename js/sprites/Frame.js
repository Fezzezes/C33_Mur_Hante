
class Frame {

    constructor(id)
    {
        this.node = document.querySelector("#"+id);
        console.log(this.node);
        this.opacity = 0;
        this.vitesse = 0.002;

        console.log("frame #"+id+" crée")

        this.node.onmouseover = () =>{

            this.node.style.opacity = 0;
            this.vitesse = -this.vitesse;
        }

        this.node.onmouseout = () =>{
            this.node.style.opacity = 1;
            this.vitesse = -this.vitesse;
        }
    }

    tick(){
        
        if(this.node.style.opacity <= 1 && this.node.style.opacity >= 0)
        {
            this.node.style.opacity = this.opacity+=this.vitesse;
            console.log(this.node.style.opacity);
        }

     
    }

}