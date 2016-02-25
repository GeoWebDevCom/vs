$(window).resize(function() {
  
	makeup();
	
	resizeEventsBanners();
	
	if ($(window).width() > 991) {
		$(".footer-col").show();
	}
	
});

$(window).load(function() {
	
	resizeEventsBanners();
	
	makeup();
  
});

$(document).ready(function() {
	
	// Кнопка печати тура
	
	$(".tour-item-print").on("click",function() {
		window.print();
	});
	
	$(".fancybox").click( function( e ) {
    if ( window.innerWidth < 991 ) {
        e.stopPropagation();
        e.preventDefault();
    }
	})
	
	$(".fancybox").fancybox();
	
	// Карта тура
	
	$(".tour-map-trigger").on("click",function() {
		$(".tour-map-wrapper").toggleClass("open");
	});
	
	$(".btn-2[data-toggle='collapse']").on("click",function() {
		$(this).hide();
	})
	
	// Слайдер тура
	
	$(".tour-slider").slick({
		dots: false,
		infinite: false,
		speed:500,
		slidesToShow: 2,
		slidesToScroll:1,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					adaptiveHeight: true
				}
			}
		]
	})
	
	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		resizeEventsBanners();
	});
	
	$("body").on("click","[disabled]",function() {
		return false;
	})
	
	$(".up-link").on("click",function() {
		$("html,body").animate({
			scrollTop: 0
		},1000)
	});
	
	// Главный слайдер
	
	$(".main-slider").slick({
		slidesToShow:1,
		slidesToScroll:1,
		infinite:false,
		arrows:false,
		dots:true,
		fade:true,
		autoplay: true,
		autoplaySpeed: 15000,
		pauseOnHover:false
	})
	
	// Главное меню
	
	$(".navbar-nav>li").on("mouseover",function() {
		if ($(this).find(".dropdown-toggle").length) {
			$(this).addClass("open");
			if ($(window).width() < 992) {
				$(this).find(".dropdown-menu").stop().hide().slideDown(300)
			}
			$(this).find(".dropdown-toggle").data("aria-expanded",true)
		}
	});
	$(".navbar-nav>li").on("mouseout",function() {
		if ($(this).find(".dropdown-toggle").length) {
			$(this).removeClass("open");
			if ($(window).width() < 992) {
				$(this).find(".dropdown-menu").stop().show().slideUp(300)
			}
			$(this).find(".dropdown-toggle").data("aria-expanded",false)
		}
	});
	
	// Сдвигаем контент влево, когда открыто мобильное меню
	
	$("[data-target='.navbar-collapse']").on("click",function() {
		$(".navbar-collapse").toggleClass("vis");
		$(".page-container").toggleClass("to-the-left");
	})
	
	// Формы в подвале
	
	$(".footer-controls-button").on("click",function() {
		if (!$(this).hasClass("active")) {
			$(".footer-controls-button").removeClass("active");
			$(this).addClass("active");
			$(".footer-col").hide();
			$(".footer-col."+$(this).data("target")).fadeIn(150);
			$("html,body").animate({
				scrollTop: $(".footer-col."+$(this).data("target")).offset().top
			})
		} else {
			$(this).removeClass("active");
			$(".footer-col").hide();
		}
	});
  
	// Табы
	
	$(".tabs-element select").on("change",function() {
		$(this).parents(".tabs-element").find(".nav-tabs li").eq($(this).find("option:selected").prevAll().length).find("a").click();
		if ($(this).parents(".tabs-element").find(".nav-tabs li").eq($(this).find("option:selected").prevAll().length).find("a").data("role") != "tab") {
			location.href = $(this).parents(".tabs-element").find(".nav-tabs li").eq($(this).find("option:selected").prevAll().length).find("a").attr("href")
		}
	});
	
	$(".tabs-element .nav-tabs li a").on("click",function() {
		$(this).parents(".tabs-element").find("select option").eq($(this).parents("li").prevAll().length).attr("selected",true)
	})
	
	
	handleForms();
	
});

function resizeEventsBanners() {
	if ($(".events-list-filter").length) {
		$(".events-filter-form").css({
			minHeight: $(".events-list-filter + .events-list-item").height()
		})
	}
  if ($(".events-list-banners").length) {
		$(".events-list-banners").each(function() {
			var bannersCont = $(this);
			bannersCont.find(".events-list-banner").css({
				height: bannersCont.parent().prev(".events-list-item").outerHeight()/2 - 8
			})
			bannersCont.find(".events-list-banner .cont").css({
				height: bannersCont.parent().prev(".events-list-item").outerHeight()/2 - 10
			})
		})
	}
}

function handleForms() {
  
	if ($("input:text").length) {
		$("input:text").each(function() {
			if ($(this).val()) {
				$(this).prev(".placeholder").hide();
			}
		});
	}
	
	if ($("textarea").length) {
		$("textarea").each(function() {
			if ($(this).val()) {
				$(this).prev(".placeholder").hide();
			}
		});
	}
	
	$("body").on("focus","input, textarea",function() {
		var item = $(this);
		
		var placeholder = item.parent().find(".placeholder");
		
		placeholder.hide();
		
	});
	
	$("body").on("blur","input, textarea",function() {
		var item = $(this);
		
		if (item.parent().find(".placeholder").length) {
			var placeholder = item.parent().find(".placeholder");

			if (!item.val() || (item.hasClass("masked") && ! /\d/.test(item.val()))) {
				placeholder.show();
			}
			
		}
		
	});
	
	$("body").on("click",".placeholder",function(e) {
		if ($(this).parent().find("input").length) {
			$(this).parent().find("input").trigger("focus");
		}
		if ($(this).parent().find("textarea").length) {
			$(this).parent().find("textarea").trigger("focus");
		}
	})
	
}

function makeup() {
	
	if ($(".tour-item-content").length) {
		if ($(".news-item-content").width() == $(".news-item-content").parents(".container-full").width()) {
			delta = 0
		} else {
			delta = 64
		}
		$(".tour-item-content .news-item-ttl").css({
			width: $(".container-full").outerWidth() - 92 - delta
		})
	}
	
	//$(".news-item-data").offset().top + $(".news-item-data").height() = $(".page-r-col").offset().top + $(".page-r-col").height();
	
  if ($(".news-item-data").length) {
		$(".page-r-col").css({
			minHeight: $(".news-item-data").outerHeight(true) + $(".news-item-data").offset().top - $(".page-r-col").offset().top
		})
	}
}