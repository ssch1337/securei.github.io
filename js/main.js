$(document).ready(function() {
	var h = $(this).height();
	$('.preloader').height(h);
})

setTimeout(function() {
console.log('fuck');

setTimeout(function(){
  $('.ml7').removeClass('none');
 },50)

$('.ml7 .letters').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});


anime.timeline({loop: false})
  .add({
    targets: '.ml7 .letter',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 750,
    easing: "easeOutExpo",
    delay: function(el, i) {
      return 50 * i;
    }
  });
}, 3000);