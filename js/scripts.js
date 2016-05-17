var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;

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
	
	if (!isMobile) {
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
	} else {
		$(".navbar-nav>li").on("click",function() {
			if ($(this).find(".dropdown-toggle").length) {
				if ($(window).width() < 992) {
					
					if (!$(this).hasClass("open")) {
						$(this).find(".dropdown-menu").stop().slideDown(300)
					} else {
						$(this).find(".dropdown-menu").stop().slideUp(300)
					}
					
				}
				
			}
		});
		
	}
	
	
	
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
			width: "auto"
		})
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