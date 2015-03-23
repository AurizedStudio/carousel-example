$(function(){
	gNav(); // グローバルメニュー（Superfishプラグイン使用）
	fNav(); // フッターメニュー（モバイル時Superfishプラグイン使用）
	equalHeight(); // 要素の高さを揃える（プラグイン使用）
	equalHeightItem01(); // 比べて要素の高さを揃える

/**
 *  グローバルメニュー
 */
function gNav(){
	var w = $(window).width(); //  * 1.05
	var sx = 767;
	if ( w > sx) {
		$("body").addClass("w-sm");
	}
	$(".sf-menu").superfish({
		delay: 0,
		speed: 0,
		pathClass: 'active',
		onShow: function(){
			$(".w-sm .blue-bar").addClass("is-blue-bar");
			if($(".sf-menu02").hasClass("sfHover")){
				$(".w-sm .blue-bar-2row").addClass("is-blue-bar");
			}
		},
		onHide: function(){
			$(".blue-bar").removeClass("is-blue-bar");
			$(".blue-bar-2row").removeClass("is-blue-bar");
		}
	});
}

/**
 *  フッターメニュー
 */
function fNav(){
	$(window).on('load resize', function(){
		var w = $(window).width(); //  * 1.05
		var sx = 767;
		if ( w <= sx ) {
			$(".fnav").superfish();
		}
	});
}

/**
 *  要素の高さを揃える
 */
function equalHeight(){
	$(".eh").each(function() {
		$(this).children(".eh-item").matchHeight();
	});
}

/**
 *  比べて要素の高さを揃える
 */
function equalHeightItem01(){
	$(window).on('load resize', function(){
		var w = $(window).width();
		var sx = 767;
		if ( w > sx ) {
			var h01 = $(".eh-height01").height();
			var h02 = $(".eh-height02").height();
			if ( h01 > h02) {
				$(".eh-height02").height(h01);
			} else {
				$(".eh-height01").height(h02);
			}
		}
	});
}

});