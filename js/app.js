var common = {
	init: function() {
		common.main();
		common.owl();
	},
	main: function(){

		$('.menu-trigger').click(function(event){
			event.preventDefault();
			$('header').toggleClass('open');
		})
		
		$('#formPopup input[type="submit"]').click(function(event){
			event.preventDefault();
			if(
				$('#formPopup .field-name').val() != '' && 
				$('#formPopup .phone-mask').val() != ''
			){
				$('#formPopup').removeClass('active');
				$('#thanksPopup').addClass('active');
			}
		})

		$('#discountForm input[type="submit"], #formBlk input[type="submit"]').click(function(event){
			event.preventDefault();
			if($(this).parent().find('.phone-mask').val() != ''){
				$('#thanksPopup').addClass('active');
			}
		})

		$('.case-trigger').click(function(event){
			event.preventDefault();
			if($(this).find('span').text() == 'Больше'){
				$(this).find('span').text('Меньше')
				$(this).parent().find('li.hidden').addClass('show');
				$(this).parent().addClass('showed')
			}else {
				$(this).find('span').text('Больше')
				$(this).parent().find('li.hidden').removeClass('show');
				$(this).parent().removeClass('showed')
			}
		});

		$('.service-trigger').click(function(event){
			event.preventDefault();
			if($(this).find('span').text() == 'Больше'){
				$(this).find('span').text('Меньше')
				$(this).parent().addClass('showed');
			}else {
				$(this).find('span').text('Больше')
				$(this).parent().removeClass('showed');
			}
		});
		
		$('.more-cases').click(function(event){
			event.preventDefault();
			if($(this).text() == 'Все достижения'){
				$(this).text('Показать меньше')
				$('.cases-columns-2').addClass('show');
			}else {
				$(this).text('Все достижения');
				$('.cases-columns-2').removeClass('show');
			}
		});

		$('.phone-mask').mask("+380(99) 999-99-99");

		$('.anchor').click(function(event){
			event.preventDefault();
			var id  = $(this).attr('href'),
			top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 3000);
			$('header').removeClass('open');
		});

		$('.form-call').click(function(event){
			event.preventDefault();
			$('#formPopup').addClass('active');
		});

		$('.popup-close').click(function(event){
			event.preventDefault();
			$('.popup-wrapper').removeClass('active');
		});
	},
	owl: function(){
		var owlSold = $('.sold-slider').owlCarousel({
			nav:true,
			dots: true,
			loop: true,
			smartSpeed: 1000,
			autoHeight:true,
			dotsContainer: '#soldDots',
			navContainer: '#soldArrows',
			dotsEach:true,
			margin: 65,
			responsive:{
				0:{
					margin: 15,
					items:3,
				},
				768:{
					margin: 15,
					items:2
				},
				1301: {
					items:3,
					dots: true,
				}
			}
		});
		
		var owlRev = $('.rev-slider').owlCarousel({
			nav:true,
			dots: true,
			loop: true,
			smartSpeed: 1000,
			autoHeight:true,
			dotsContainer: '#revDots',
			navContainer: '#revArrows',
			dotsEach:true,
			margin: 90,
			responsive:{
				0:{
					margin: 15,
					items:3,
				},
				768:{
					margin: 15,
					items:1
				},
				1301: {
					items:2,
					dots: true,
				}
			}
		});
		var owlClients = $('.clients-slider').owlCarousel({
			nav:true,
			dots: true,
			loop: true,
			smartSpeed: 1000,
			autoHeight:true,
			dotsContainer: '#clientsDots',
			navContainer: '#clientsArrows',
			dotsEach:true,
			margin: 90,
			responsive:{
				0:{
					margin: 15,
					items:3,
				},
				768:{
					margin: 15,
					items:1
				},
				1301: {
					items:2,
					dots: true,
				}
			}
		});
		


		$('#soldArrows .owl-next').click(function() {
			$('#soldDots').addClass('hidden');
			owlSold.trigger('next.owl.carousel');
		})

		$('#soldArrows .owl-prev').click(function() {
			$('#soldDots').addClass('hidden');
			owlSold.trigger('prev.owl.carousel', [300]);
		})

		$('#soldDots').on('click', '.owl-dot', function(e) {
			$('#soldDots').addClass('hidden');
			owlSold.trigger('to.owl.carousel', [$(this).index(), 1000]);
		});

		owlSold.on('translated.owl.carousel', function(event) {
			$('#soldDots').removeClass('hidden');	
		})



		$('#revArrows .owl-next').click(function() {
			$('#revDots').addClass('hidden');
			owlRev.trigger('next.owl.carousel');
		})

		$('#revArrows .owl-prev').click(function() {
			$('#revDots').addClass('hidden');
			owlRev.trigger('prev.owl.carousel', [300]);
		})

		$('#revDots').on('click', '.owl-dot', function(e) {
			$('#revDots').addClass('hidden');
			owlRev.trigger('to.owl.carousel', [$(this).index(), 1000]);
		});

		owlRev.on('translated.owl.carousel', function(event) {
			$('#revDots').removeClass('hidden');	
		})




		$('#clientsArrows .owl-next').click(function() {
			$('#clientsDots').addClass('hidden');
			owlClients.trigger('next.owl.carousel');
		})

		$('#clientsArrows .owl-prev').click(function() {
			$('#clientsDots').addClass('hidden');
			owlClients.trigger('prev.owl.carousel', [300]);
		})

		$('#clientsDots').on('click', '.owl-dot', function(e) {
			$('#clientsDots').addClass('hidden');
			owlClients.trigger('to.owl.carousel', [$(this).index(), 1000]);
		});

		owlClients.on('translated.owl.carousel', function(event) {
			$('#clientsDots').removeClass('hidden');
		})
	}

};

(function() {
	common.init();
}());
