
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
	$('.exit_button').css({'display':'block'});
});
$(document).mouseup(function (e){ // событие клика по веб-документу
	var div = $(".exit_button"); // тут указываем ID элемента
	if (!div.is(e.target) // если клик был не по нашему блоку
	    && div.has(e.target).length === 0) { // и не по его дочерним элементам
		$('.exit_button').css({'display':'none'})
	}
});
//*******************************
$('.inputs').on('focusin', function () {
	$('.header_note').css({'display':'flex'});
	$('.append_note').css({'align-items':'start'});
	$('.describe_notes').css({'font-size':'16px','height':'120px'});
	$('.notes_menu').css({'display':'flex'});
});
function closeInp () {
	$('.header_note').css({'display':'none'});
	$('.append_note').css({'align-items':'center'});
	$('.describe_notes').css({'font-size':'19px','height':'26px'});
	$('.notes_menu').css({'display':'none'});
	$('.color').removeClass('active_color');
	$('.white').addClass('active_color');
	$('.color').empty();
	$('.white').append('<span class="icon-checkmark"></span>');
	$('.add_note').css({'background-color':'white'});
	$('.note_in').css({'background-color':'white'});
}
$(document).mouseup(function (e){ // событие клика по веб-документу
	var div = $(".add_note"); // тут указываем ID элемента
	if (!div.is(e.target) // если клик был не по нашему блоку
	    && div.has(e.target).length === 0) { // и не по его дочерним элементам
		closeInp();
	}
});
$('.icon-paint').on('click', (e) => {
	$('.notes_colours').css({'display':'block'})
})
$(document).mouseup(function (e){ // событие клика по веб-документу
	var div = $(".icon-paint"); // тут указываем ID элемента
	if (!div.is(e.target) // если клик был не по нашему блоку
	    && div.has(e.target).length === 0) { // и не по его дочерним элементам
		$('.notes_colours').css({'display':'none'})
	}
});
$('.color').on('click', function (e) {
	$('.color').removeClass('active_color');
	$(this).addClass('active_color');
	let that = document.querySelector('.active_color');
	let col = getComputedStyle(that);
	let cola = col.backgroundColor;
//	ішлюха сюда не лізь
	$('[name="color"]').val(cola)
	$('.color').empty();
	$(this).append('<span class="icon-checkmark"></span>');
	$('.add_note').css({'background-color':cola});
	$('.note_in').css({'background-color':cola});
})
$('.notes_close').on('click', e => {
	closeInp();
	document.querySelector('.header_note').value = '';
	document.querySelector('.describe_notes').value = '';
})
});
