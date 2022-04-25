var panelTitle = $(".panelTitle");
var panelArrow = $(".panelArrow");
var panelText = $(".panelText");
var accordionMaster = $("#accordionMaster");

for (var i = 0; i < panelTitle.length; i++) {


  panelTitle[i].addEventListener("click", function() {

// setup the clicked panel with appropriate styling
    $(this).toggleClass("panelTitleActive"); // change panel title style
    $(this).children("img").toggleClass("arrowActive"); // flips the arrow image
    $(this).children(".panelText").toggleClass("panelTextHidden"); // display or hide panel text

// reset the other panels:

    $(this).siblings("div").find(".panelText").addClass("panelTextHidden"); // hides any open panels
    $(this).siblings("div").find("img").removeClass("arrowActive"); // hides any open panels
    $(this).siblings("div").removeClass("panelTitleActive"); // removes bold styling on any open panels titles

  });

}
