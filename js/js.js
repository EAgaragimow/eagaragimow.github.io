$(document).ready(function() {

	// CHOOSE-CURRENCY

	$('.choose-currency').on('click', function () {
		$('ul', this).slideToggle();
	});

	$('.choose-currency ul li').on('click', function () {
		var $thisClass = $(this).attr('class');
		$('.choose-currency #iconCurrency').removeAttr('class');
		$('.choose-currency #iconCurrency').addClass($thisClass);
	});

	// CHOOSE-CITY

	$('.choose-city').on('click', function () {
		$('ul', this).slideToggle();
	});

	$('.choose-city ul li').on('click', function () {
		var $thisText = $(this).text();
		$('.choose-city .city-value').text($thisText);
	});

	// FOCUS ON SEARCH

	var value = $('#form-search input[type="text"]');

	value
		.on('focus', function () {
			$(this).val(null);
		})
		.on('blur', function () {
			$(this).val('Поиск по сайту');
		});


	// SHOW-MENU

	$('.show-menu').click(function () {
		$('.brand-block .container').toggleClass('padding');
		$('.navigation').toggle();
	});

});