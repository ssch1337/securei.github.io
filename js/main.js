setInterval(function(){
  $(document).ready(function() {
    var h = $(this).height();
    $('.preloader').height(h);
  })
});

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

setTimeout(function(){
  anime.timeline({loop: false})
    .add({
      targets: '.btns',
      opacity: 1,
      duration: 1250,
      delay: 0
    })
}, 1400);

$('.btns').click(function () {
  anime.timeline({loop: false})
    .add({
      targets: '.cp',
      opacity: 0,
      duration: 750,
      easing: "easeOutExpo"
    });
  setTimeout(function(){
    $('.cp').remove();
  },800)
});