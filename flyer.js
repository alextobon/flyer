
$("#name").keyup(function(){
    $("#flyerText").html($(this).val());
});
  
document.getElementById("b2").addEventListener("click", function() {
  alert("Click on b2")
});

$( "#b3" ).on( "click", function() {
  alert( "b3" );
} );

document.getElementById("download").addEventListener("click", function() {
alert("Click on descargar")

  html2canvas(document.querySelector('#flyer'), {
    scale: 4
  }).then(function(canvas) {
     //if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      //saveAs(canvas.toDataURL(), 'Apoyo-de-' + $("#name").val() +'.heic');
      //console.log("This is an iOS device.");
    //} else {
        //console.log("This is not an iOS device!");
        saveAs(canvas.toDataURL(), 'Apoyo-de-' + $("#name").val() +'.jpg');
    //}
  });
});


function saveAs(uri, filename) {

  var link = document.createElement('a');

  if (typeof link.download === 'string') {

      link.href = uri;
      link.download = filename;

      //Firefox requires the link to be in the body
      document.body.appendChild(link);

      //simulate click
      link.click();

      //remove the link when done
      document.body.removeChild(link);

  } else {

      window.open(uri);

  }
}