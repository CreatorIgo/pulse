
// шаблон слайдера скопирован https://kenwheeler.github.io/slick/#go-get-it
// Initialize your slider in your script file or an inline script tag

// документ,  когда струткура документа будет готова
$(document).ready
    (function(){
      $('.carousel__inner').slick(
        {   speed: 700,
           //dots: true,                 // точки навигации
            adaptiveHeight: true,         // адаптивная высота под каждый слайд
            // autoplay: true,             // автопрокрутка
            // autoSpeed: 300,      
            fade: true,                   // эффект растворения картинки
            cssEase: 'linear',             // равномерное растворение

            // создаем класс html c помощью css
            prevArrow: '<button type="button" class="slick-prev"> <img src="icons/left.svg"> </button>',
            nextArrow: '<button type="button" class="slick-next""> <img src="icons/right.svg"> </button>',
            
            responsive: [                         // адаптация под различные расширения экрана
              {
                  breakpoint: 992,                //  мобильная версия планшета 768px
                  settings: {
                      dots: true,                 // точки навигации 
                      arrows: false               // стрелки навигации 
                  }
              }
            ]
        }      
      );
    });
