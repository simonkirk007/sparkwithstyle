// Initialize Wow
new WOW().init();

$(document).ready(function() {
  // Your JavaScript code goes here

         $(function () {
          $('[data-toggle="tooltip"]').tooltip();
        })

        
});


$(".cus-product-tabs .custom-tabs li:first-child a").addClass("active");
$(".cus-product-tabs .tab-content .tab-pane:first-child").addClass("show active");

// Product Slider
$(".productSlider").slick({
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
});

// Products Details Slider
$(".product-single-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".product-list-slider",
});
$(".product-list-slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".product-single-slider",
  dots: false,
  focusOnSelect: true,
});

// Password Show On Upload
$(".toggle-password").click(function () {
  $(this).toggleClass("show");
  let input = $(this).parent().find(".password-field");
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});

// Quantity Counter
const add = document.getElementById("add");
const quantity = document.getElementById("quantity");
var quantityNum = 0;
const minus = document.getElementById("minus");
add.addEventListener("click", () => {
  quantityNum += 1;
  quantity.value = quantityNum;
  minus.style.pointerEvents = "all";
});
minus.addEventListener("click", () => {
  quantityNum -= 1;
  quantity.value = quantityNum;
  if (quantityNum == 0) {
    minus.style.pointerEvents = "none";
  } else {
    minus.style.pointerEvents = "all";
  }
});
