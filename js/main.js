$(document).ready(function () {
    var activeProject = $(".content-project");
    
    activeProject.on("mouseenter", function (e) {
        e.preventDefault();
        var notActiveProject = $(".content-project").not($(this));
        
        TweenMax.to($(this), 1, {
            border: "green",
            scale: 1.1,
            transformOrigin: "50% 50%",
            ease: Circ.easeOut    
        });
        TweenMax.to(notActiveProject, 1, {
            opacity: 0.3,
            ease: Circ.easeOut
        });
    });
    
    activeProject.on("mouseleave", function (e) {
        e.preventDefault();
        var notActiveProject = $(".content-project").not($(this));
        
        TweenMax.to($(this), 1, {
            scale: 1,
            transformOrigin: "50% 50%",
            ease: Expo.easeOut
        });
        TweenMax.to(notActiveProject, 1, {
            opacity: 1,
            ease: Circ.easeOut
        });
    });
    
    /*BarbaJs*/    
   /* Barba.Pjax.start();*/
   
});