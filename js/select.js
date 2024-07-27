var allInputs = $( ":input" );
var formChildren = $( "form > *" );
$( "#messages" ).text( "Found " + allInputs.length + " inputs and the form has " +
  formChildren.length + " children." );
 
$( "form" ).on( "submit", function( event ) {
  event.preventDefault();
} );