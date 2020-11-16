$(function () {
  $("button").click(function () {
    $("#box").animate({
      left: "250px",
      width: "250px",
      height: "250px",
      opacity: "0.8",
      transform: "rotateY(-30deg)",
    });
  });
});
