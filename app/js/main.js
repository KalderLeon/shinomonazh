$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      loop: true,
      singleItem:true,
      items : 1
  });
 
});

$(document).ready(function() {
 
  $("#owl-demo-two").owlCarousel({
 
      loop: true,
      singleItem:true,
      items : 1
  });
 
});

$(document).ready(function() {
 
  $("#owl-demo-three").owlCarousel({
 
      loop: true,
      items: 1,
      margin: 50,
      stagePadding: 250,
      center: true,
      itemsScaleUp: true,
      posination: true,
      dots: false,
      nav: true,
      navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>']
  });
 
});
  
// Rotate btn
$( ".crossRotate" ).click(function() {
  if (  $( this ).css( "transform") == 'none' ){
      $(this).css("transform","rotate(90deg)");
  } else {
      $(this).css("transform","" );
  }
});