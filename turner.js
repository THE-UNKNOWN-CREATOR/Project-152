AFRAME.registerComponent( "turner", {
    schema:{
        speed: {type:"number", default:5}
    },

    update: function(){
        this.rot = 90
        window.addEventListener("click", (e)=>{
            this.rot += this.data.speed;
            this.updateRot()
        })
    },

    updateRot: function(){
        let el = document.querySelector("#car");
        el.setAttribute( "rotation", {x:0, y:this.rot, z:0});
    },
})