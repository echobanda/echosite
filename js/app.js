document.addEventListener("DOMContentLoaded", function() {


var lastTime = 0;

function flickerPauses(){
  if(lastTime < 5){
    lastTime++;
    return Math.random()*100;
  }else{
    lastTime = 0;
    return Math.random()*2300;
  }
}

function flicker() {
  $("#text").toggleClass('on');
  setTimeout(flicker, flickerPauses());
}

flicker();

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});


$('button').on('click', function() {
	$('.menu').slideToggle(function() {
		$('.menu').css("visibility", "hidden");
	});

});

console.log($('button'));

// $('.flex-container').mouseenter(function () {
//     $(this).css({
//         outline: "0px solid transparent"
//     }).animate({
//         outlineWidth: '4px',
//          outlineColor: '#f37736'
//     }, 500);
// }).mouseleave(function () {
//     $(this).animate({
//          outlineWidth: '0px',
//          outlineColor: '#037736'
//     }, 500);
// });


});
