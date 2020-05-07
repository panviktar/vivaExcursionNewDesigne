document.addEventListener("DOMContentLoaded", function() {
	// Cards for NEWS section enciclopedia
		$('.link-to__text-js').each(function () {
			var height = $(this).outerHeight();
			$(this).parent().height(height);
		});
		$('.link-to').hover(function () {
			$(this).find('.link-to__text').removeClass('no-active');
		}, function () {
			$(this).find('.link-to__text').addClass('no-active');
		})
	// Cards for NEWS section enciclopedia
    $('.link-to__text-js').each(function () {
        var height = $(this).outerHeight();
        $(this).parent().height(height);
    });
    $('.link-to').hover(function () {
        $(this).find('.link-to__text').removeClass('no-active');
    }, function () {
        $(this).find('.link-to__text').addClass('no-active');
    })

	//  Masonry
	
    var $grid = $('.grid').masonry({
        itemSelector: '.grid-item',
        percentPosition: true,
        columnWidth: '.grid-sizer',
        gutter: 20
    });

    // var $grid = $('.grid-isnt').masonry({
    //     itemSelector: '.grid-item-isnt',
    //     percentPosition: true,
    //     columnWidth: '.grid-sizer',
    //     gutter: 5
    // });

    // layout Masonry after each image loads
    $grid.imagesLoaded().progress(function() {
        $grid.masonry();
    });
    //  Masonry END

	
		// Flowing-scroll
		$('.flowing-scroll').on('click', function() {
			var el = $(this);
			var dest = el.attr('href'); // получаем направление
			if (dest !== undefined && dest !== '') { // проверяем существование
				$('html').animate({
						scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
					}, 500 // скорость прокрутки
				);
			}
			return false;
		});
		// SCROLL OPACITY
		$(window).scroll( function(){

			//get scroll position
			var topWindow = $(window).scrollTop();
			//multipl by 1.5 so the arrow will become transparent half-way up the page
			var topWindow = topWindow * 1.5;
			
			//get height of window
			var windowHeight = $(window).height();
				
			//set position as percentage of how far the user has scrolled 
			var position = topWindow / windowHeight;
			//invert the percentage
			position = 1 - position;
		  
			//define arrow opacity as based on how far up the page the user has scrolled
			//no scrolling = 1, half-way up the page = 0
			$('.arrow-wrap').css('opacity', position);
		  
		  });
		
	
	
		// material-card author
		$('.material-card > .mc-btn-action').click(function() {
			var card = $(this).parent('.material-card');
			var icon = $(this).children('i');
			icon.addClass('fa-spin-fast');
	
			if (card.hasClass('mc-active')) {
				card.removeClass('mc-active');
	
				window.setTimeout(function() {
					icon
						.removeClass('fa-arrow-left')
						.removeClass('fa-spin-fast')
						.addClass('fa-bars');
	
				}, 800);
			} else {
				card.addClass('mc-active');
	
				window.setTimeout(function() {
					icon
						.removeClass('fa-bars')
						.removeClass('fa-spin-fast')
						.addClass('fa-arrow-left');
	
				}, 800);
			}
		});
	});
	
	
	// ------------------ NAVIGATION TOP NEMU-------------//
	var timelineOpen = new mojs.Timeline({ speed: 1.5 });
	var timelineClose = new mojs.Timeline({ speed: 2 });
	var _strokeWidth;
	var RADIUS = 15;
	var hamburger = document.querySelector("#hamburger-open");
	var spans = document.getElementsByClassName("spans");
	var spanOne = document.querySelector("#spanOne");
	var spanTwo = document.querySelector("#spanTwo");
	var spanThree = document.querySelector("#spanThree");
	var modalMenu = document.querySelector(".modal-menu");
	var burst1 = new mojs.Burst({
		parent: hamburger,
		x: "50%",
		y: "50%",
		angle: { 0: 90 },
		radius: { 30: 45 },
		count: 3,
		children: {
			shape: "circle",
			radius: RADIUS,
			scale: { 1: 0 },
			fill: ["#820101", "#820101", "#820101"],
			duration: 2000,
			easing: "quad.out"
		}
	});
	
	var burst2 = new mojs.Burst({
		parent: hamburger,
		x: "50%",
		y: "50%",
		angle: { 0: 90 },
		radius: { 30: 45 },
		count: 3,
		children: {
			shape: "circle",
			radius: RADIUS,
			scale: { 0: 1 },
			strokeWidth: { 1: 3 },
			opacity: { 1: 0 },
			fill: "transparent",
			stroke: ["#820101", "#820101", "#820101"],
			duration: 2000,
			easing: "quad.out"
		}
	});
	
	// OPEN
	var openBackground = new mojs.Shape({
		fill: "#111820",
		scale: { 0: 8.5 },
		radius: 200,
		delay: 1000,
		easing: "cubic.out",
		backwardEasing: "ease.out",
		duration: 2000
	});
	
	burst1.el.style.zIndex = 2;
	// check if the hamburger's been crossed
	let cross = spanOne.classList.contains("white");
	//timeline with burst and background open
	timelineOpen.add(burst1, burst2, openBackground);
	//timeline with background close
	timelineClose.add(openBackground);
	//click on the hamburger
	hamburger.addEventListener("click", function(e) {
		// check if the menu is a cross
		var cross = spanOne.classList.contains("white");
		modalMenu.classList.toggle("show");
		if (cross) {
			timelineClose.playBackward();
			for (var i = 0; i < spans.length; i++) {
				spans[i].classList.remove("white");
			}
			spanOne.classList.remove("spanOneRotate");
			spanTwo.classList.remove("spanTwoRotate");
			spanThree.classList.remove("spanThreeHide");
			setTimeout(function() {
				isbody.classList.remove("isbody-hidden");
			}, 1000);	
		} else {
			timelineOpen.play();
			for (var i = 0; i < spans.length; i++) {
				spans[i].classList.add("white");
			}
			spanOne.classList.add("spanOneRotate");
			spanTwo.classList.add("spanTwoRotate");
			spanThree.classList.add("spanThreeHide");
			isbody.classList.add("isbody-hidden");
		}



		
		  
		 

	});
	// AOS.init({disable: 'mobile'});
	AOS.init();

	
	
	
	
	
	
	
	
