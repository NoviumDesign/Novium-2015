if ($("body").hasClass("index")) {
  var owl = $("#frontpageSlider");

  $(document).ready(function(){
    owl.owlCarousel({
      items: 1
    });
  });
  
  BackgroundCheck.init({
    targets: 'header, .image-slider, .slide span',
    images: '.slide',
    threshold: 55
  });

  owl.on('translated.owl.carousel',function(property){
    BackgroundCheck.refresh();
  });

} else if ($("body").hasClass("no-top-image")) {
  
} else {
  BackgroundCheck.init({
    targets: 'header, h1',
    images: '.header-image',
    threshold: 55
  });
}