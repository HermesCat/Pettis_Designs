let resume = true;
let about = false;
let portfolio = false;


$(".about-click").click(function () {
    if (resume === true) {
        resume = false;
        portfolio = false;
        about = true;
        $(".animated-block").animate({
            width: "75%"
        });
        $(".animated-block").animate({
            width: "100%"
        });
        $(".animated-block").animate({
            width: "50%",
            left: "50%"
        });
        aboutFormat();
    }
});

$(".resume-click").click(function () {
    if (about === true) {
        resume = true;
        portfolio = false;
        about = false;
        $(".animated-block").animate({
            width: "75%",
            left: "25%"
        });
        $(".animated-block").animate({
            width: "100%",
            left: "0%"
        });
        $(".animated-block").animate({
            width: "50%",
            left: "0%"
        });
        resumeFormat();
    }
});

$(".portfolio-click").click(function () {
    if (about === true) {
        resume = true;
        portfolio = false;
        about = false;
        $(".animated-block").animate({
            width: "75%",
            left: "25%"
        });
        $(".animated-block").animate({
            width: "100%",
            left: "0%"
        });
        $(".animated-block").animate({
            bottom: "50%"
        });
        $(".animated-block").animate({
            bottom: "80%"
        });
        $(".animated-block").animate({
            bottom: "100%"
        });
        $(".showcase").hide();
        $(".portfolio-container").animate({
            bottom: "65%"
        });
        resumeFormat();
    }
});


function aboutFormat() {
    if (about === true) {
        $("#secondary-nav").css("text-align", "right");
        $("#secondary-nav").css("margin-right", "40px");
        $("#secondary-nav").css("color", "white");
        $(".nav-link").css("color", "white");
        $(".resume-click").css("color", "white");
        $(".portfolio-click").css("color", "white");
        $(".highlighter").css("color", "white");
        $(".main-title").css("color", "black");
        $(".about-click").addClass("active");
        $(".about-click").addClass("secondary-active");
        $(".resume-click").removeClass("active");
        $(".resume-click ").removeClass("secondary-active");
        $(".active").css("color", "#ffa500");
    }
};

function resumeFormat() {
    if (resume === true) {
        $("#secondary-nav").css("text-align", "left");
        $("#secondary-nav").css("margin-left", "40px");
        $("#secondary-nav").css("color", "white");
        $(".about-click").css("color", "white");
        $(".portfolio-click").css("color", "white");
        $(".nav-link").css("color", "black");
        $(".highlighter").css("color", "black");
        $(".main-title").css("color", "white");
        $(".resume-click").addClass("active");
        $(".resume-click").addClass("secondary-active");
        $(".about-click").removeClass("active");
        $(".about-click").removeClass("secondary-active");
        $(".active").css("color", "#ffa500");
    }
};