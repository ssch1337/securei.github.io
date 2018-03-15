var lineDrawing = anime.timeline({
  direction: 'alternate',
  loop: false
}), svg = '.lineDrawing .svg path',
btnanim = anime.timeline({
  direction: 'alternate',
  loop: false,
  autoplay: false
});

anime.timeline({loop: false})
  .add({
    targets: '.kr',
    translateY: [-200, 0],
    opacity: 1,
    easing: "easeOutExpo",
    delay: 200
  })

$('.ml .letters').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

lineDrawing
  .add({
    targets: svg,
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 2000,
    delay: function(el, i){
      return 100 * (i+1)
    }
  })
  .add({
    targets: svg,
    fill: '#5E89FB',
    duration: 1500
  })
  .add({
    targets: svg,
    translateY: [0,-400],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1000,
    delay: function(el, i) {
      return 100 + 50 * i;
    }
  })
  .add({
    targets: '.preloader',
    zIndex: 6
  })
  .add({
    targets: '.text-wrapper',
    opacity: 1
  })
  .add({
    targets: '.ml .line',
    scaleY: [0,1],
    opacity: [0.2,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml .line',
    translateX: [0,$(".ml .letters").width()],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  })
  .add({
    targets: '.ml .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: function(el, i) {
      return 20 * (i+1)
    }
  })
  .add({
    targets: '.buttn',
    opacity: 1,
    translateY: [-200,0],
    easing: "easeOutExpo"
  })

lineDrawing.complete = function(){
  var fade = anime({
    targets: '.ml .line',
    opacity: [0,1],
    duration: 500,
    delay: 500,
    direction: 'alternate',
    loop: true
  })
}

btnanim
  .add({
    targets: '.preloader',
    opacity: 0,
    translateX: 500,
    delay: 0,
    easing: 'easeOutExpo'
  })
  .add({
    targets: '.container',
    translateX: [-500, 0],
    opacity: 1,
    delay: 0,
    zIndex: 7,
    easing: 'easeOutExpo'
  })

$('.buttn').click(function(){
  btnanim.play();
  console.log('btn click')
});

btnanim.complete = function(){
  $('.preloader').remove();
  $('.bylogo').remove();
}