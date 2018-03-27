/****************************/
/*      Created 2018        */
/*      by Sergey Tseglov   */
/****************************/
/*
  P.S. Пожалуйста, не читайте код, сильно торопился сделал всё неакуратно, главное работает.
*/

var lists = new Object();

lists = {
  l1: {
    header: 'Введение',
    parag: 'В Интернете есть много угроз и о главных из них мы сегодня поговорим.',
    content: '<h1>Безопасный интернет</h1>\
<div class="hr"></div>\
<div class="start">\
<h2>Введение</h2>\
<p>В Интернете есть много угроз и о главных из них мы сегодня поговорим.</p> \
<p class="quote">Интерне́т (англ. Internet, МФА: [ˈɪn.tə.net]) — всемирная система объединённых компьютерных сетей для хранения и передачи информации. Часто упоминается как Всемирная сеть и Глобальная сеть, а также просто Сеть. Построена на базе стека протоколов TCP/IP. На основе Интернета работает Всемирная паутина (World Wide Web, WWW) и множество других систем передачи данных. </p>\
<p>Сам Интернет не несёт в себе угрозы, несут угрозу те у кого этот инструмент находится в руках, то есть мошенники, преступники и т.д.</p>\
<p>Сегодня мы поговорим о том как не попасть в руки этих людей.</p>\
</div>'
  },
  l2: {
    parag: 'Под киббербуллингом подразумевается понятие оскорблений в течении длительного периода времени снизу определение.',
    header: 'Кибербуллинг',
    content: '<h1>Безопасный интернет</h1>\
<div class="hr"></div>\
<div class="start">\
<div class="pd kbr">\
<h2>Кибербуллинг</h2>\
<p>Под киббербуллингом подразумевается понятие оскорблений в течении длительного периода времени снизу определение.</p>\
<p class="quote">Кибербуллинг - намеренные оскорбления, угрозы, диффамации и сообщение другим компрометирующих данных с помощью современных средств коммуникации, как правило, в течение продолжительного периода времени.</p>\
<p>На киббербуллинг не стоит реагировать, иначе он продолжится, лучше игнорировать его.</p>\
</div>\
</div>'
  },
  l3: {
    parag: 'Под мошенничеством принято понимать хищение имущества или приобретение права на чужое имущество путем обмана или злоупотребления доверием. Основная задача мошенников — втереться в доверие к жертве, чтобы ввести ее в заблуждение и заставить принять необдуманное решение. Сегодня мошенники активно осваивают информационные технологии, распространяя свою деятельность по всему Интернету. Как правило, интернет-мошенники рассчитывают на неопытность пользователя, привлекая при этом различные технические средства, набор которых постоянно совершенствуется.',
    header: 'Интернет-мошенничество',
    content: '<h1>Безопасный интернет</h1>\
<div class="hr"></div>\
<div class="start">\
<div class="pd imo">\
<h2>Интернет-мошенничество</h2>\
<p>Интернет мошшеничество встречается часто в интернете.\
<p>Под мошенничеством принято понимать хищение имущества или приобретение права на чужое имущество путем обмана или злоупотребления доверием. Основная задача мошенников — втереться в доверие к жертве, чтобы ввести ее в заблуждение и заставить принять необдуманное решение. Сегодня мошенники активно осваивают информационные технологии, распространяя свою деятельность по всему Интернету. Как правило, интернет-мошенники рассчитывают на неопытность пользователя, привлекая при этом различные технические средства, набор которых постоянно совершенствуется.</p>\
<p>Одна из наиболее распространенных форм мошенничества в Интернете — это фишинг, под которым понимают мошеннические действия или схемы, направленные на получение персональных данных у пользователей. Приемы, используемые мошенниками, стары как мир, поэтому компетентный пользователь должен знать их и уметь распознавать.</p>\
<p class="bd">Прямое обращение.</p>\
<p>Часто мошенники напрямую обращаются к своей жертве по электрон-ной почте или по телефону с просьбой сообщить личные данные. Эти обращения могут быть как персональными, так и безличными. Поскольку многие почтовые сервисы умеют распознавать фишинговые сообщения, мошенники могут использовать изображение вместо текста. Чаще всего фишинговые письма приходят с незнакомого адреса, но возможны и исключения: злоумышленники могут взломать чужой аккаунт в социальной сети или на почтовом сервисе и рассылать с его помощью сообщения от лица друзей или коллег пострадавшего пользователя.</p>\
<p class="bd">Обманные ссылки.</p>\
<p>Еще один способ кражи личных данных — это использование ссылок, ведущих на поддельные сайты. Как правило, мошенники применяют разные приемы для того, чтобы замаскировать такие ссылки под сайты известных компаний. Например, ссылка может содержать незаметную опечатку: http://mail.gooogle.com/mail/.Также мошенники могут использовать доменные имена нижних уровней, напримерhttp://mail.google.vor.com/, — пройдя по такой ссылке, пользователь попадет не на сайт http://www.google.com/, а на сайт http://www.vor.com/.</p>\
<p class="bd">Поддельные веб-сайты.</p>\
<p>Все чаще для получения персональных данных мошенники используют поддельные веб-сайты. Современные информационные технологии позволяют с легкостью создавать сайты, имитирующие дизайн страницы авторизации любого почтового сервиса, социальной сети, банка или платежной системы. Стоит пользователю ввести свои личные данные, например логин и пароль, как его аккаунт становится доступным для мошенников. Распознать поддельные веб-сайты бывает очень трудно, особенно для неопытного пользователя.</p>\
<p class="bd">Поддельное программное обеспечение.</p>\
<p>Иногда для кражи личных данных\
мошенники используют поддельное программное обеспечение, также известное под названием «scareware» (букв. «пугающее программное обеспечение»). Как правило, такие программы выглядят как антивирусы, которые генерируют ложные системные сообщения о различных угрозах для компьютера пользователя. Чаще всего в подобном уведомлении предлагается скачать антивирус, который на самом деле оказывается программой, ворующей личные данные пользователя. Столкнуться с подобными программами можно на любом сайте, в электронной почте, онлайн-объявлениях, в социальных сетях, в результатах поисковых систем и во всплывающих окнах браузера, имитирующих системные сообщения.</p>\
<p>Теперь вы знаете какие есть схемы у мошшеников, они могут быть использованы в комбинациях тем самым усложняя её. Никогда не поддавайтесь под них.</p>\
</div></div>'
  }
}

var x = 0, y = 1;
while(x < 1) {
  if(lists['l'+y] == undefined) break;
  console.log('fuck' + y);
  $('.lists').append('<div class="l' + y + ' list"><h1>' + lists['l'+y].header +'</h1><p>'+ lists['l'+y].parag +'</p><div id="'+y+'" class="btn-list buttn">Прочитать дальше</div></div>');
  y++;
}

var lineDrawing = anime.timeline({
  direction: 'alternate',
  loop: false
}), svg = '.lineDrawing .svg path',
btnanim = anime.timeline({
  direction: 'alternate',
  loop: false,
  autoplay: false
}), listanim = anime.timeline({
  direction: 'alternate',
  loop: false,
  autoplay: false
}), menuanim = anime.timeline({
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
    opacity: 1,
    translateY: [0,-400],
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
    opacity: 1
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
    opacity: [1,0],
    translateY: [0,-400],
    duration: 1500,
    easing: 'easeOutExpo'
  })
  .add({
    targets: '.lists',
    opacity: 1
  })
  .add({
    targets: '.list',
    opacity: 1,
    translateX: [-200,0],
    easing: 'easeOutExpo',
    delay: function(el, i, l) {
      return i * 60;
    }
  })

listanim
  .add({
    targets: '.lists .list',
    translateX: [0,120],
    opacity: 0,
    duration: 120,
    easing: 'easeOutExpo',
    delay: function(el, i, l) {
      return i * 30;
    }
  })
  .add({
    targets: '.content',
    zIndex: 7,
    translateX: [-500, 0],
    opacity: [0,1],
    delay: 250,
    easing: 'easeOutExpo'
  })
  .add({
    targets: '.menu',
    translateY: [-100,0],
    opacity: [0,1],
    easing: 'easeOutExpo'
  })
  .add({
    targets: '.lists',
    opacity: 1
  })
  .add({
    targets: '.list',
    translateX: [-200,0],
    opacity: 1,
    easing: 'easeOutExpo',
    delay: function(el, i, l) {
      return i * 60;
    }
  })

$('.learn').click(function(){
  btnanim.restart();
  $('.lists').css({"display":"block"})
  console.log('btn click');
});

btnanim.complete = function(){
  $('.preloader').remove();
  $('.bylogo').remove();
  $('.list').css({'transition':'0.5s'})
}

for(var x = 1; x < y; x++) {
  $('#' + x).click(function(e){
    $('.content').append(lists['l'+ e.target.id].content);
    $('.content').css({"display": "block"});
    $('.lists').fadeOut();
    $('.menu').css({"display":"block"})
    listanim.restart();
  });
}

listanim.complete = function(){
  $('.list').css({'transition':'0s'})
  $('.lists').css({'opacity':'0'})
}

menuanim
  .add({
    targets: '.menu',
    translateY: [0,-70],
    easing: 'easeOutExpo'
  })
  .add({
    targets: '.content',
    translateX: [0,200],
    opacity: [1,0],
    easing: 'easeOutExpo'
  })

var animlist = anime.timeline({loop: false, autoplay: false})
  .add({
    targets: '.list',
    opacity: [0,1],
    translateX: [-200,0],
    easing: 'easeOutExpo',
    delay: function(el, i, l) {
      return i * 60;
    }
  })

$('.butt2').click(function(){
  menuanim.restart();
  setTimeout(function(){
    $('.content').fadeOut();
    $('.menu').fadeOut();
  }, 850);
});

menuanim.complete = function(){
  animlist.restart();
  setTimeout(function(){
    $('.content').empty();
    $('.lists').css({'display':'block', 'opacity':'1'})
  },100)}

animlist.complete = function(){
  $('.list').css({'transition':'0.5s'})
}