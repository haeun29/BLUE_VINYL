


$(function () {
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

  document.getElementById('today').innerHTML = dateStr;

});





//modal


$(function(){
    $('#section3 .album li').click(function(){
      $('.modal').addClass('on');
      // $("body").addClass('notScroll');
 
    });

    $('.modal .close-btn').click(function(){
      $('.modal').removeClass('on');
      return false;
    });
});






// 메뉴 클릭시 부드럽게

$(function(){
  $('#menu li a').click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 300);
  });
});




//모바일 

$(function(){
  $('.toggle-btn').click(function(){
    $('#menu').toggleClass('on');
    return false;
  });
  $('#menu li a').click(function(){
    $('#menu').removeClass('on');
    return false;
  });
})

