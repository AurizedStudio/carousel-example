$(function(){
	carousel(); // メインビジュアルカルーセル
	bnrCarousel(); // バナーカルーセル

/**
 *  メインビジュアルカルーセル
 */
function carousel(){
	$(".test-carousel").owlCarousel({
		autoplay: true,
		autoplayHoverPause: true,
		autoplayTimeout: 10000,
		center: true,
		loop: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				stagePadding: 10
			},
			768: {
				items: 1,
				stagePadding: 100,
				nav: true,
				navText: ['<img src="img/item-arrow10.png" alt="前のコンテンツに遷移">', '<img src="img/item-arrow11.png"  alt="次のコンテンツに遷移">']
			}
		},
		dots: true
	});
}

/**
 *  バナーカルーセル
 */
function bnrCarousel(){
	$(".odakyu-bnr").owlCarousel({
		autoplay: true,
		autoplayHoverPause: true,
		autoplayTimeout: 8000,
		loop: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2,
				margin: 20
			}
		},
		nav: true,
		navText: ['<img src="img/item-arrow12.png" width="30" height="30" alt="前のコンテンツに遷移">', '<img src="img/item-arrow13.png" width="30" height="30" alt="次のコンテンツに遷移">'],
		dots: false
	});
}

});
