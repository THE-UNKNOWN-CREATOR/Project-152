AFRAME.registerComponent( "car", {
    schema:{
        x:{type: "number", default:0},
        y:{type: "number", default:0},
        z:{type: "number", default:0}
    },

    init: function (){
        let el = document.querySelector("#car");
        el.setAttribute("gltf-model", "./Models/Car/scene.gltf");
        el.setAttribute("position", {x:this.data.x, y:this.data.y, z:this.data.z});
        el.setAttribute("rotation", {x:0, y:90, z:0})
    }
} )