    // slick - слайдер

// шаблон слайдера скопирован https://kenwheeler.github.io/slick/#go-get-it
// Initialize your slider in your script file or an inline script tag

// документ,  когда струткура документа будет готова
$(document).ready
    (function(){
       
        $('.carousel__inner').slick(
          {   speed: 700,
             // dots: true,                 // точки навигации
              adaptiveHeight: true,         // адаптивная высота под каждый слайд
              // autoplay: true,             // автопрокрутка
              // autoSpeed: 300,      
              fade: true,                   // эффект растворения картинки
              cssEase: 'linear',             // равномерное растворение

              // создаем кнопки. классы html, стили смотри в _carousel.css
              prevArrow: '<button type="button" class="slick-prev"> <img src="icons/left.svg"> </button>',
              nextArrow: '<button type="button" class="slick-next""> <img src="icons/right.svg"> </button>',
              
              responsive: [                         // адаптация под различные расширения экрана
                {
                    breakpoint: 992,                //  мобильная версия планшета 768px
                    settings: {
                        // dots: true,                 // точки навигации 
                        arrows: false               // стрелки навигации 
                    }
                }
              ]
          }      
        );

      }); 


        /*  
          // tiny - slider 
          const slider = tns({
              container: '.carousel__inner',     // обращение может быть так же по id "container": "#base",
              items: 1,                          // слайдов отобр. на экране
              slideBy: 'page',                   // кол-во перелистываемых слайдов 
              // nav: false,                     // точки навигации
              controls: false                    // стандартные стрелки
              // autoplay: false,
              // стрелки создаваемые скриптом из документации tiny
              // controlsText: [
              //     '<img src="icons/left.svg">',
              //     '<img src="icons/right.svg">'
              //   ]
            });

            // обработчик событий onClick мыши  на кнопки навигации 'следующий', 'предидущий' слайд
            document.querySelector('.next').addEventListener('click',  function ()  {
              slider.goTo('next');
            } );
            document.querySelector('.prev').addEventListener('click',  function ()  {
              slider.goTo('prev');
            });
      */