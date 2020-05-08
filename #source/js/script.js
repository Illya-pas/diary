$('.icon-download').on('click', function () {
	$('.icon-download').css({'display':'none'});
	$('.icon-interface').css({'display':'flex'});
})
$('.icon-interface').on('click', function () {
	$('.icon-interface').css({'display':'none'});
	$('.icon-download').css({'display':'flex'});
})
$('.header__input').on('focusin', function () {
	$('.header__input').css({'background-color':'#fff', 'box-shadow':'0px 1px 3px grey', 'transition':'.3s'});
})
$('.header__input').on('focusout', function () {
	$('.header__input').css({'background-color':'#F1F3F4', 'box-shadow': 'none', 'transition':'.3s'});
})

docWidth = window.innerWidth;

$('.icon-search').on('click', function () {
	if (docWidth < 830) {
		$('.icon-search').css({'display':'none'});
		$('.header__input').css({'display':'inline-block'});
		$('.icon-interface1').css({'display':'flex'});
		$('.icon-arrow-left2').css({'display':'flex'});
		$('.header__input').css({'background-color':'#fff', 'box-shadow':'0px 1px 3px grey', 'transition':'.3s'});
	}
})

$('.header__input').on('focusout', function () {
	if (docWidth < 830) {
		$('.icon-search').css({'display':'flex'});
		$('.icon-interface1').css({'display':'none'});
		$('.header__input').css({'display':'none'});
		$('.icon-arrow-left2').css({'display':'none'});
	}
})

window.addEventListener('resize', function () {
	docWidth = window.innerWidth;
	if (docWidth > 830) {
		$('.icon-search').css({'display':'flex'});
		$('.header__input').css({'display':'inline-block'});
		$('.icon-interface1').css({'display':'flex'});
		$('.icon-arrow-left2').css({'display':'none'});
	}else {
		$('.icon-search').css({'display':'flex'});
		$('.icon-interface1').css({'display':'none'});
		$('.header__input').css({'display':'none'});
		$('.icon-arrow-left2').css({'display':'none'});
	}
})

$('icon-arrow-left2').on('click', function () {
	$('icon-arrow-left2').css({'display':'none'});
	$('.icon-search').css({'display':'flex'});
	$('.icon-interface1').css({'display':'none'});
	$('.header__input').css({'display':'none'});
})
$('.icon-interface1').on('click', function () {
	document.querySelector('.header__input').value = '';
})