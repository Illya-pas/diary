
jQuery(function(){
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
$('.side_icon').on('click', function () {
	$('.side_icon').css({'background-color':'initial'});
	$(this).css({'background-color':'orange'});
})
$('.icon-social-media').on('click', function () {
	document.querySelector('.header__left__inf').innerHTML = 'Reminder';
})
$('.icon-seo-and-web').on('click', function () {
	document.querySelector('.header__left__inf').innerHTML = 'Notes';
})
$('.icon-rubbish-can').on('click', function () {
	document.querySelector('.header__left__inf').innerHTML = 'Trash can';
})
$('.header__burger').on('click', function () {
	$('.item__describe').toggleClass('describe_active');
	$('.item__describe').css({'display':'none'});
	$('.describe_active').css({'display':'flex'});
})
$('.menu__item').on('click', function () {
	$('.menu__item').removeClass('active_item');
	$(this).addClass('active_item');
	$('.side_icon').css({'background-color':'initial'});
	$('.active_item > .side_icon').css({'background-color':'orange'});
})
$('.user__icon').on('click', function () {
	$('.exit_button').toggleClass('butt_active');
	$('.exit_button').css({'display':'none'});
	$('.butt_active').css({'display':'block'});
});
});