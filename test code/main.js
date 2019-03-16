// JQUERY code
$('#move-button').click(function() {

 $('#anime-elt').animate({
   top: "550px",
   left: "550px"
 },5000);

});



// JS CODE
// function moveElt() {
//
// var inc=0;
//
// var elt = document.getElementById('anime-elt');
// var interval = setInterval(animate,10);
//
//
// function animate() {
//   inc++;
//   elt.style.top = inc + 'px';
//   elt.style.left = inc + 'px';
//
//   if(inc==550) {
//     clearInterval(interval);
//   }
//
// }
//
//
// }
