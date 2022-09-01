$(function () {
  $('#fullpage').fullpage({
    //options here
    // responsiveWidth: 1000,
    // sectionsColor: ['gold', '#1abc9c', '#C0C0C0'],
    anchors: ['BlueVinyl', 'Artist', 'Releases', 'News','Contact'],
    menu: '#menu',
    navigation: true,
    navigationTooltips: ['BlueVinyl', 'Artist', 'Releases', 'News','Contact'],
    navigationPosition: 'right',

  });



  // 아티스트 p 태그 호버 
  
  $('#section2 .flex-slide').hover(function(){
    $(this).find('.a-info p').toggleClass('on');
  });



  // 콘텍트의 lp 호버효과

  $('#section5 .contact p').mouseover(function(){
    $('#section5 .vinyl').addClass('on')
  });
  
  $('#section5 .contact p').mouseout(function(){
    $('#section5 .vinyl').removeClass('on')
  });
  
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },


});


// new에 오늘날짜


$(function(){
  const date = new Date();

  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);
  const dateStr = year + '.' + month + '.' + day;

  console.log(dateStr);

  document.getElementById('today').innerHTML = dateStr;

});




//modal


$(function(){
    $('#section3 .album li').click(function(){
      $('.modal').addClass('on');
    });

    $('.modal .close-btn').click(function(){
      $('.modal').removeClass('on');
    });
    
});






