gsap.registerPlugin(ScrollTrigger);
AOS.init();

$(window).scroll(function(){
    if($(this).scrollTop()>800){
        if ($(window).width() > 1520){
            $('#navBar').css('dicplay','block').fadeIn(200);
        }
    } else {
        $('#navBar').fadeOut(200);
    }
})

$(window).resize( function(){
    if ($(window).width() < 1520){
        $('#navBar').css('display','none');
    };
})

// $('.door-icon').click(function(){
//     $('#navBar').addClass('appear');
//     $('.door-icon').css('display','none');
// })

// $('.door-icon').click(function(){
//     if ($('.door-icon').css('display') === 'none'){
//         console.log(this);
//         $('#navBar').removeClass('appear');
//         $('.door-icon').css('display','block');
//     } else if ($('#navBar').hasClass('appear')) {
//         $('#navBar').addClass('appear');
//         $('.door-icon').css('display','none');
//     }
// })

// $('.door-icon').click(function(){
//     if (!$('#navBar').hasClass('appear')){
//         console.log(this);
//         $('#navBar').addClass('appear');
//         $('.door-icon').css('display','none');
//     } else if ($('#navBar').hasClass('appear')) {
//         $('#navBar').removeClass('appear');
//        $('.door-icon').css('display','block');
//     }
// })

// $('html').click(function(){
//     if (!$('#navBar').hasClass('appear')){

//         console.log(this);
//         $('#navBar').addClass('appear');
//         $('.door-icon').css('display','none');
//     } else if ($('#navBar').hasClass('appear')) {
//         $('#navBar').removeClass('appear');
//        $('.door-icon').css('display','block');
//     }
// })

// $('.door-icon').click(function(){
//     $('#navBar').addClass('appear');
//     $('.door-icon').css('display','none');
// })
// $('html').click(function(){
//     if($('#navBar').hasClass('appear')){
//         $('#navBar').removeClass('appear');
//         $('.door-icon').css('display','block');
//     };
// })

$('.door-icon').click(function(){
    $('.nav-bar').toggleClass('appear');
})


// slick

$('.sec06-wrap').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [ // 반응형 웹 구현 옵션
            {  
                breakpoint: 960, //화면 사이즈 960px
                settings: {
                    dots: true,
                    slidesToShow:2 
                } 
            },
            {  
                breakpoint: 800, //화면 사이즈 960px
                settings: {
                    dots: true,
                    slidesToShow:1
                } 
            }
        ]
});

// slick end


// nav scroll spy

$(function () {

    var link = $('#navBar a.dot');
    link.on('click', function (e) {

        var target = $($(this).attr('href'));
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 600);
        $(this).addClass('nav-active');

        e.preventDefault();
    });

    $(window).on('scroll', function () {
        findPosition();
    });

    function findPosition() {
        $('section').each(function () {
            if (($(this).offset().top - $(window).scrollTop()) < 10) {
                link.removeClass('nav-active');
                $('#navBar').find('[data-scroll="' + $(this).attr('id') + '"]').addClass('nav-active');
            }
        });
    }

    findPosition();
});



// nav scroll spy end

// section04 scroll trigger 

ScrollTrigger.create({
    trigger: ".sec04-line",
    // markers: true,
    start: "10px 700px",
    toggleClass: {
        targets: ".sec04-line", 
        className: "w-100"
    } 
});

ScrollTrigger.create({
    trigger: ".sec04-line",
    // markers: true,
    start: "10px 700px",
    toggleClass: {
        targets: ".sec04-title span:not(.sec04-line)", className: "appear-ani"
    }
});

/* sec04 img ainamtion */

ScrollTrigger.create({
    trigger: ".sec04-img1",
    // markers: true,
    start: "10px 500px",
    end: "+=150",
    toggleActions: 'play reverse none reverse',
    toggleClass: {
        targets: ".sec04-img1", 
        className: "w-100"
    },
});
ScrollTrigger.create({
    trigger: ".sec04-img2",
    start: "10px 350px",
    end: "+=150",
    toggleActions: 'play reverse none reverse',
    toggleClass: {
        targets: ".sec04-img2", 
        className: "w-100"
    }
});
ScrollTrigger.create({
    trigger: ".sec04-img3",
    start: "10px 200px",
    end: "+=150",
    toggleActions: 'play reverse none reverse',
    toggleClass: {
        targets: ".sec04-img3", 
        className: "w-100"
    }
});
ScrollTrigger.create({
    trigger: ".sec04-img4",
    start: "10px 50px",
    end: "+=150",
    toggleActions: 'play reverse none reverse',
    toggleClass: {
        targets: ".sec04-img4", 
        className: "w-100"
    }
});


$('.sec04-img1').mouseenter(function(){
    $(this).addClass("w-100");
    $('.sec04-img:not(.sec04-img1)').addClass("w-25");
})
$('.sec04-img1').mouseleave(function(){
    $(this).removeClass("w-100");
    $('.sec04-img:not(.sec04-img1)').removeClass("w-25");
})
// sec04 hover 1
$('.sec04-img2').mouseenter(function(){
    $(this).addClass("w-100");
    $('.sec04-img:not(.sec04-img2)').addClass("w-25");
})
$('.sec04-img2').mouseleave(function(){
    $(this).removeClass("w-100");
    $('.sec04-img:not(.sec04-img2)').removeClass("w-25");
})
// sec04 hover 2
$('.sec04-img3').mouseenter(function(){
    $(this).addClass("w-100");
    $('.sec04-img:not(.sec04-img3)').addClass("w-25");
})
$('.sec04-img3').mouseleave(function(){
    $(this).removeClass("w-100");
    $('.sec04-img:not(.sec04-img3)').removeClass("w-25");
})
// sec04 hover 3
$('.sec04-img4').mouseenter(function(){
    $(this).addClass("w-100");
    $('.sec04-img:not(.sec04-img4)').addClass("w-25");
})
$('.sec04-img4').mouseleave(function(){
    $(this).removeClass("w-100");
    $('.sec04-img:not(.sec04-img4)').removeClass("w-25");
})
// sec04 hover 4


// $('.sec04-img1').mouseenter(function(){
//     $(this).css("width","100%")
//     $('.sec04-img:not(.sec04-img1)').css("width","25%");
// })
// $('.sec04-img2').mouseenter(function(){
//     $('.sec04-img:not(.sec04-img2)').css("width","25%");
// })
// $('.sec04-img3').mouseenter(function(){
//     $('.sec04-img:not(.sec04-img3)').css("width","25%");
// })
// $('.sec04-img4').mouseenter(function(){
//     $('.sec04-img:not(.sec04-img4)').css("width","25%");
// })

// section03 slide
const active = "active";
const black = "black";
const firstBox = document.querySelector(".sec03-fig:nth-of-type(1)");
const lastBox = document.querySelector(".sec03-fig:nth-of-type(4)");
const leftBtn = document.querySelector(".xi-angle-left-thin");
const rightBtn = document.querySelector(".xi-angle-right-thin");
const firstIcon = document.querySelector(".sec03-table li:first-child");
const lastIcon = document.querySelector(".sec03-table li:last-child");

let moveLeft = function(){
    let current = document.querySelector(`.${active}`);
    let current2 = document.querySelector(`.${black}`);
    if(current){
        current.classList.remove(active);
        current2.classList.remove(black);
        let prev = current.previousElementSibling;
        let prev2 = current2.previousElementSibling;
        if(prev){
            prev.classList.add(active);
            prev2.classList.add(black);
        }else{
            lastBox.classList.add(active);
            lastIcon.classList.add(black);
        }
    }else{
        firstBox.classList.add(active);
        firstIcon.classList.add(black);
    }
};
let moveRight = function(){
    let current = document.querySelector(`.${active}`);
    let current2 = document.querySelector(`.${black}`);
    if(current){
        current.classList.remove(active);
        current2.classList.remove(black);
        let next = current.nextElementSibling;
        let next2 = current2.nextElementSibling;
        if(next){
            next.classList.add(active);
            next2.classList.add(black);
        }else{
            firstBox.classList.add(active);
            firstIcon.classList.add(black);
        }
    }else{
        firstBox.classList.add(active);
        firstIcon.classList.add(black);
    }
}

leftBtn.addEventListener("click", moveLeft);
rightBtn.addEventListener("click", moveRight);

function init(){
    firstBox.classList.add(active);
    firstIcon.classList.add(black);
}
init();

// section03 slide end

// kakao map

var container = document.getElementById('map');
var options = {
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 3
};

var map = new kakao.maps.Map(container, options);

// kakao map end

// section09 tap

const tabList = document.querySelectorAll('.sec09-tap li');
const contents = document.querySelectorAll('.sec09-con')
let activeCont = '';

for(var i = 0; i < tabList.length; i++){
  tabList[i].querySelector('.btn').addEventListener('click', function(e){
    e.preventDefault();
    for(var j = 0; j < tabList.length; j++){
      tabList[j].classList.remove('sec09-tap-active');
      contents[j].style.display = 'none';
    }

    this.parentNode.classList.add('sec09-tap-active');

    activeCont = this.getAttribute('href');
    document.querySelector(activeCont).style.display = 'block';
  });
}

// section09 tap 

