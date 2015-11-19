$( "#navToggle" ).click(function() {
  $( "#mobileNav" ).toggleClass( "active" );
  $( this ).toggleClass( "active" );
  $( "body" ).toggleClass( "navActive" );
});