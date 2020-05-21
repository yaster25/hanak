$(window).on('load', function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
 
    $('header').addClass('fadeInDown animated').css('animation-delay', '0.2s');
    if(window.innerWidth>1023){
        new WOW().init({
            mobile:false
        });
    }
    
});

$(document).ready(function(){
    
    $('.js-top-slider').slick({
        infinite: true,
        arrows:true,
        dots:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true,
        autoplay:true,
        appendArrows:'.top-slider-arrows'
    });    
    
    /*fixed header*/
	function showDiv() {
		if ($(window).scrollTop() > 0) {			
			$("#header").addClass('fixed');
		}else {
            $("#header").removeClass('fixed');			
		}
	}
    showDiv();
	$(window).scroll(showDiv);	
	/*fixed header*/
	
	/* smooth scroll to anchor*/
	 $('.scroll').click(function() { 
         $.fancybox.close();
		  var target = $(this.hash);
		  if (target.length) {
			var tt= target.offset().top;	
			var wid=window.innerWidth;
			
			if (wid < 481){
				tt=tt-40;	
			}			 		 
			$('html, body').animate({
			  scrollTop: tt
			}, 1500);			
			return false;
		  }	   
	  });
    /* smooth scroll to anchor*/    
    
    /* set active menu item*/
    
	function activeSection(el){				
        
        if(window.innerWidth>480){
            tt=$(el).offset().top;
        }else{
           tt=$(el).offset().top - 84; 
        }        
        
		if ($(this).scrollTop() >= tt && $(this).scrollTop() <= tt + $(el).height()) {
			$('.nav-item__link').removeClass('active');			
			$("a[href='" + el + "']").addClass('active');
		}
	}
	activeSection('#top');
	activeSection('#about');
	activeSection('#team');
	activeSection('#news');
	activeSection('#why');
	activeSection('#reviews');
	
	$(window).scroll(function(event){
      	activeSection('#top');
        activeSection('#about');
        activeSection('#team');
        activeSection('#news');
        activeSection('#why');
        activeSection('#reviews');
	});
	/* set active menu item*/
    
    $('[data-fancybox]').fancybox({
        touch: false,
        closeExisting: true,
        afterShow : function( instance, current ) {
            
        }
    });
    
    $('.js-slider-photo').slick({
        infinite: true,
        arrows:true,
        dots:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:false,
        autoplay:false,
        appendArrows:'.block-slider-photo .slider-arrows-wrapper'
    }); 
    $('.js-slider-photo')
        .on('afterChange', function(event, slick, currentSlide, nextSlide){
        var i=currentSlide+1;
        if(i<10) i='0'+ i;
            $('.block-slider-photo .slider-num span').html(i);
    });
    
    $('.js-slider-news').slick({
        infinite: false,
        arrows:true,
        dots:false,
        slidesToShow: 3,
        slidesToScroll: 1,
        fade:false,
        autoplay:false,
        appendArrows:'.block-slider-news .slider-arrows-wrapper',
        responsive: [
            
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1, 
                    adaptiveHeight:true
                }
            },
        ]
    }); 
     
    $('.js-slider-advantages').slick({
        infinite: true,
        arrows:true,
        dots:false,
        slidesToShow: 4,
        slidesToScroll: 1,
        fade:false,
        autoplay:false,
        appendArrows:'.block-slider-advantages .slider-arrows-wrapper',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2
                }
            },{
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    adaptiveHeight:true
                }
            },
        ]
    }); 
    
    $('.js-slider-team').slick({
        infinite: true,
        arrows:true,
        dots:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true,
        autoplay:false,
        appendArrows:'.block-slider-team .slider-arrows-wrapper',
        responsive: [
            
            {
                breakpoint: 992,
                settings: {
                    adaptiveHeight:true
                }
            },
        ]
    }); 
    
    $('.js-slider-reviews').slick({
        infinite: true,
        arrows:true,
        dots:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true,
        autoplay:false,
        appendArrows:'.block-slider-reviews .slider-arrows-wrapper',
        responsive: [
            
            {
                breakpoint: 992,
                settings: {
                    adaptiveHeight:true
                }
            },
        ]
    }); 
     
    
    $("#form-contact").validate({
         errorElement:'div',
         errorPlacement: function(error, element) {
            element.parent().append(error);
        },
			rules: {
				name: "required",
				phone: "required",
                email: {
					required: true,
					email: true
				},
				city: "required"
			},
			messages: {
				name: "",
				phone: "",
				email: "",				
                city: ""				
			},
            submitHandler:  function(form) { 
            form.submit(); 
        }
     });
    
    var $form = $("#form-contact");
    var $submitbutton = $("#form-contact .btn");

    $form.on("blur keyup change", ".form-input", function(event) {
      if ($form.valid()) {
        $submitbutton.prop('disabled', false);  
        
      } else {
        $submitbutton.prop("disabled", "disabled");
      }
    });
    
    
    $(".form-phone").mask("+7 (999) 999-99-99");
    
    
    $("#form-contact-2").validate({
         errorElement:'div',
         errorPlacement: function(error, element) {
            element.parent().append(error);
        },
			rules: {
				name: "required",
				phone: "required"                
			},
			messages: {
				name: "",
				phone: ""			
			},
            submitHandler:  function(form) { 
            form.submit(); 
        }
     });
    
    var $form2 = $("#form-contact-2");
    var $submitbutton2 = $("#form-contact-2 .btn");

    $form2.on("blur keyup change", ".form-input", function(event) {
      if ($form2.valid()) {
        $submitbutton2.prop('disabled', false);  
        
      } else {
        $submitbutton2.prop("disabled", "disabled");
      }
    });
    
    
    $("#form-contact-3").validate({
         errorElement:'div',
         errorPlacement: function(error, element) {
            element.parent().append(error);
        },
			rules: {
				name: "required",
				phone: "required",
                email: {
					required: true,
					email: true
				},
				comment: "required"
			},
			messages: {
				name: "",
				phone: "",
				email: "",				
                comment: ""				
			},
            submitHandler:  function(form) { 
            form.submit(); 
        }
     });
    
    var $form3 = $("#form-contact-3");
    var $submitbutton3 = $("#form-contact-3 .btn");

    $form3.on("blur keyup change", ".form-input", function(event) {
      if ($form3.valid()) {
        $submitbutton3.prop('disabled', false);  
        
      } else {
        $submitbutton3.prop("disabled", "disabled");
      }
    });
    
    
 });

