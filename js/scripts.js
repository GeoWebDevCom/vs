$(window).resize(function() {
  
	resizeEventsBanners();
	
	if ($(window).width() > 991) {
		$(".footer-col").show();
	}
	
});

$(window).load(function() {
	
	resizeEventsBanners();
  
});

$(document).ready(function() {
	
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
		fade:true
	})
	
	// Главное меню
	
	$(".navbar-nav>li").on("mouseover",function() {
		if ($(this).find(".dropdown-toggle").length) {
			$(this).addClass("open");
			$(this).find(".dropdown-toggle").data("aria-expanded",true)
		}
	});
	$(".navbar-nav>li").on("mouseout",function() {
		if ($(this).find(".dropdown-toggle").length) {
			$(this).removeClass("open");
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