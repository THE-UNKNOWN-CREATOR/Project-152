AFRAME.registerComponent( "base", {
    schema:{
        radius:{type: "number", default: 150},
        height:{type: "number", default:3}
    },

    init: function (){
        let el = document.querySelector("#base");
        el.setAttribute("geometry", {
            primitive:"cylinder",
            radius:this.data.radius,
            height:this.data.height
        });
        el.setAttribute("material", {color: "#1769aa"})
    }
} )